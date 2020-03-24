import React, { Component, Fragment } from 'react'
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'
import Excercises from './Components/Exercises'
import { muscles, exercises } from './store'

class App extends Component {
  state = {
    exercises,
    exercise: ''
  }

  getExerciseByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise
  
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
        
        return exercises
      }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => {
    this.setState(({ exercise }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExerciseByMuscles(),
    { category, exercise } = this.state

    return (
      <Fragment>
        <Header />

        <Excercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  } 
}

export default App;
