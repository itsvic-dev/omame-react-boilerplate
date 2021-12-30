import React from 'react'
import tw from 'twin.macro'
import omame from '@/assets/icon.jpg'

const App = (): JSX.Element => {
	return (
		<div css={tw`h-screen flex flex-col gap-8 justify-center items-center`}>
			<img src={omame} css={tw`rounded-full w-64 h-auto shadow-lg mx-auto`}/>
			<p css={tw`text-2xl`}>welcome to omame&apos;s React boilerplate</p>
		</div>
	)
}

export default App
