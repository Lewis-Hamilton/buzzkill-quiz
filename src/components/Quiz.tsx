import React from 'react'
import 'typeface-roboto'
import QuizCard from './QuizCard'

export default function Quiz() {
	const test = true

	if (test === true) {
		return (
			<QuizCard
				question='How old are you?'
				answerOne='0-20'
				answerTwo='20-40'
				answerThree='40-60'
				answerfour='60-80'
			/>
		)
	} else {
		return <p>error</p>
	}
}
