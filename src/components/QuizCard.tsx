import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

interface Props {
	question: string
	answerOne: string
	answerTwo: string
	answerThree: string
	answerfour: string
	doWhatever: any
}

const QuizCard = (props: Props) => {
	const { question, answerOne, answerTwo, answerThree, answerfour } = props

	return (
		<Grid container direction='column' justify='center' alignItems='center'>
			<Paper style={{ padding: '10rem' }}>
				<Grid item>
					<Typography variant='h3'>{question}</Typography>
				</Grid>
				<Grid item>
					<Grid
						container
						direction='row'
						justify='space-evenly'
						alignItems='center'>
						<Grid item>
							<Button onClick={props.doWhatever}>{answerOne}</Button>
						</Grid>
						<Grid item>
							<Button onClick={props.doWhatever}>{answerTwo}</Button>
						</Grid>
					</Grid>
					<Grid
						container
						direction='row'
						justify='space-evenly'
						alignItems='center'>
						<Grid item>
							<Button onClick={props.doWhatever}>{answerThree}</Button>
						</Grid>
						<Grid item>
							<Button onClick={props.doWhatever}>{answerfour}</Button>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	)
}
export default QuizCard
