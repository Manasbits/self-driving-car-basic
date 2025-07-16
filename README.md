# Self-Driving Car Simulation with Neural Networks

![Self-Driving Car Simulation](car.png)

A JavaScript-based self-driving car simulation that uses a neural network to learn how to navigate a road while avoiding obstacles. This project demonstrates fundamental concepts of machine learning, neural networks, and genetic algorithms in an interactive and visual way.

## Features

- 🚗 **AI-Powered Cars**: Cars learn to drive using a neural network
- 🧠 **Neural Network**: Implements a feedforward neural network with backpropagation
- 🧬 **Genetic Algorithm**: Uses survival of the fittest to evolve better drivers
- 🎮 **Interactive**: Watch as the AI learns and improves over generations
- 💾 **Save/Load**: Save the best performing neural network for future use

## How It Works

1. **Sensing**: Each car is equipped with distance sensors (rays) that detect the environment
2. **Neural Network**: The sensor data is fed into a neural network
3. **Decision Making**: The network outputs control signals (steering, acceleration, braking)
4. **Learning**: The best-performing cars are selected for the next generation
5. **Mutation**: The neural networks of the best cars are slightly mutated to create variation

## Project Structure

- `index.html` - Main HTML file that sets up the simulation
- `main.js` - Core simulation logic and animation loop
- `car.js` - Car physics, controls, and neural network integration
- `sensor.js` - Ray-casting sensors for environment detection
- `network.js` - Neural network implementation
- `road.js` - Road and lane management
- `visualizer.js` - Neural network visualization
- `utils.js` - Utility functions
- `controls.js` - Input handling
- `car.png` - Car sprite

## Getting Started

1. Clone the repository
2. Open `index.html` in a modern web browser
3. The simulation will start automatically with 20 AI cars
4. Watch as the cars learn to navigate the road
5. Use the save (💾) button to save the best performing neural network
6. Use the delete (🗑️) button to clear the saved network

## Dependencies

This project uses vanilla JavaScript with HTML5 Canvas. No external libraries are required.


## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Inspired by various online tutorials and educational resources on neural networks and genetic algorithms
- Car sprite by [OpenGameArt](https://opengameart.org/)
