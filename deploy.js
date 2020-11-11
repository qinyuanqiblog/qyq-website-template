// 开发和测试自动打包到对一个环境，生产自动打zip包，直接丢给领导上线

//命令行颜色
const chalk = require('chalk')
const log = console.log
const path = require('path')
// 连接传输到服务器插件
const NodeSSH = require('node-ssh')
const ssh = new NodeSSH()
// 取到node执行文件的参数，进行打包区分
const argv = process.argv.slice(2)
// 引入压缩文件插件
const compressing = require('compressing')

// 打包后的目录名称
const buildDirName = 'dist'
// 打包后文件的路径
const distDir = './' + buildDirName
// 打包后的压缩名称
const distZipPath = './' + buildDirName + '.zip'
// 服务器配置
let remoteConfig = {}

// node deploy.js qq  取到qq来做判断，判断是那个环境，然后做不同的处理
switch (argv[0]) {
  // 开发环境的一些配置
  case 'dev':
    log(chalk.blue('----开始打包到开发环境----'))
    remoteConfig = {
      host: '211.149.157.233',
      // 远程端口，默认是21
      port:22000,
      username: 'root',
      password: '528fh4zp',
      remotePath: '/home/server/tomcat-yycms/webapps/' + buildDirName,
    }
    upload()
    break
  // 测试环境的一些配置
  case 'test':
    log(chalk.blue('----开始打包到测试环境----'))
    remoteConfig = {
      host: '192.168.1.248',
      // 远程端口，默认是21
      // port:21
      username: 'h5',
      password: 'h5',
      remotePath: '/usr/local/nginx/html/h5/' + buildDirName,
    }
    upload()
    break
  // 生产环境就自动压缩文件，不做别的处理
  case 'production':
    log(chalk.blue('----生产环境----开始压缩文件----'))
    compressing.zip
      .compressDir(distDir, distZipPath)
      .then(() => {
        log(chalk.green(`压缩 ${distZipPath} 成功`))
      })
      .catch(() => {
        log(chalk.red(`压缩 ${distZipPath} 失败`))
      })
    break

  default:
    log(chalk.keyword('orange')('deploy走了没有处理的方式'))
    break
}
/**
 *  上传文件到服务器
 *  node 7.6 以上都支持 async 语法
 */
async function upload() {
  const failed = []
  const successful = []
  try {
    // 连接服务器
    await ssh.connect({
      host: remoteConfig.host,
      username: remoteConfig.username,
      password: remoteConfig.password,
      port: remoteConfig.port,
    })
    // 刪除目录再上传
    await ssh.execCommand('rm -rf ./' + buildDirName, { cwd: remoteConfig.remotePath })

    // 开始上传文件到远程指定目录下
    await ssh.putDirectory(distDir, remoteConfig.remotePath, {
      recursive: true,
      concurrency: 10,
      validate: function(itemPath) {
        const baseName = path.basename(itemPath)
        console.log(baseName)
        return (
          baseName.substr(0, 1) !== '.' && baseName !== 'node_modules' // do not allow dot files
        ) // do not allow node_modules
      },
      tick: function(localPath, remotePath, error) {
        if (error) {
          failed.push(localPath)
        } else {
          successful.push(localPath)
        }
      },
    })
  } catch (error) {
    log(chalk.red('upload 上传失败，错误信息如下==>', error))
    return false
  }
  log(chalk.green('传输完成'))
  log(chalk.green('传输成功文件数==>', successful.length))
  log(chalk.red('传输失败文件数==>', failed.length))
  // 退出
  process.exit()
}
