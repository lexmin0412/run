import { execSync } from 'node:child_process'
import { printEmptyLine } from './utils'

interface RunCmdOptions {
	cwd?: string
}

/**
 * 同步执行命令
 * @param command
 */
export const runCmdSync = (command: string, options?: RunCmdOptions) => {
	const {
		cwd = process.cwd(),
	} = options || {}
	console.log('目录', cwd)
	console.log('执行', command)
	const output = execSync(command)
	console.log('输出', output.toString().trim())
	printEmptyLine()
}


