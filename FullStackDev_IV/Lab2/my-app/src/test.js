import Student from './components/student'

it('renders college name and location', async () => {
    // Render new instance in every test to prevent leaking state

    const {getByText} = render(
        <Student name="Rick Rude" number="11111"  enrolled="2"/>)

    await waitForElement(()=> getByText(/Student Rick Rude with student number/));
});