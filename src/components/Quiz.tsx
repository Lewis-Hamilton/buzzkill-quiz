import React, { useState } from 'react'
import 'typeface-roboto'
import QuizCard from './QuizCard'
import Button from '@material-ui/core/Button'

const Quiz = () => {
	const [questionNumber, setQuestionNumber] = useState(0)

	const nextPage = () => {
		setQuestionNumber(questionNumber + 1)
	}

	if (questionNumber === 0) {
		return (
			<>
				<h1>Welcome!</h1>
				<h1>What vehicle are you?</h1>
				<Button onClick={() => setQuestionNumber(1)}>Begin</Button>
			</>
		)
	} else if (questionNumber === 1) {
		return (
			<QuizCard
				doWhatever={nextPage}
				question='How old are you?'
				answerOne='0-20'
				answerTwo='20-40'
				answerThree='40-60'
				answerfour='60-80'
			/>
		)
	} else if (questionNumber === 2) {
		return (
			<QuizCard
				doWhatever={nextPage}
				question='What is your Gender?'
				answerOne='Man'
				answerTwo='Woman'
				answerThree='Apache Attack Helicopter'
				answerfour='neither a 0 or a 1'
			/>
		)
	} else if (questionNumber === 3) {
		return (
			<QuizCard
				doWhatever={nextPage}
				question='Are you Gay?'
				answerOne='Yes'
				answerTwo='yes'
				answerThree='yes'
				answerfour='yes'
			/>
		)
	} else if (questionNumber === 4) {
		return (
			<QuizCard
				doWhatever={nextPage}
				question='Are you mad about the last question?'
				answerOne='yes'
				answerTwo='no'
				answerThree='what question'
				answerfour='unsure'
			/>
		)
	} else if (questionNumber === 5) {
		return (
			<QuizCard
				doWhatever={nextPage}
				question='Do you have a dog?'
				answerOne='yes'
				answerTwo='no'
				answerThree='I like cats'
				answerfour='I eat dogs'
			/>
		)
	} else if (questionNumber === 6) {
		return (
			<QuizCard
				doWhatever={nextPage}
				question='What color is the shirt you are wearing?'
				answerOne='red'
				answerTwo='blue'
				answerThree='no shirt'
				answerfour='none of the above'
			/>
		)
	} else if (questionNumber === 7) {
		return (
			<QuizCard
				doWhatever={nextPage}
				question='Are these questions annoying yet?'
				answerOne='yes'
				answerTwo='no'
				answerThree='I cannot read'
				answerfour='show me what vehicle I am'
			/>
		)
	} else if (questionNumber === 8) {
		return (
			<QuizCard
				doWhatever={nextPage}
				question='What is your favorite pizza topping?'
				answerOne='pepperoni'
				answerTwo='cheese'
				answerThree='olives'
				answerfour='none of the above'
			/>
		)
	} else if (questionNumber === 9) {
		return (
			<QuizCard
				doWhatever={nextPage}
				question='How many more questions do you think there are?'
				answerOne='1'
				answerTwo='2'
				answerThree='3'
				answerfour='100'
			/>
		)
	} else if (questionNumber === 10) {
		return (
			<QuizCard
				doWhatever={nextPage}
				question='What did you have for dinner?'
				answerOne='human food'
				answerTwo='dog food'
				answerThree='dirt'
				answerfour='nothing'
			/>
		)
	} else if (questionNumber === 11) {
		return (
			<>
				<h1>Congratulations</h1>
				<img src='ranger.jpg' alt='learn to see you blind fuck'></img>
				<h1>You are a Ford Ranger!</h1>
				<Button onClick={() => setQuestionNumber(0)}>Retry</Button>
			</>
		)
	} else {
		return <p>error</p>
	}
}

export default Quiz
