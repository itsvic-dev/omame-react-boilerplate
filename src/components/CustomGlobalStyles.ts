import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export default createGlobalStyle`
	body {
		${tw`dark:bg-gray-900 dark:text-white`};
	}
`
