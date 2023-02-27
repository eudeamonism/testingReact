import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('Checks to see if Hello World is printed', () => {
	//Arrange
	render(<Greeting />);

	//Act
    // ... nothing

    //Assert
    const helloWorldElement = screen.getByText(/Hello World/i)
    expect(helloWorldElement).toBeInTheDocument();
});
