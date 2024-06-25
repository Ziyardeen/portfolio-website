import styled from 'styled-components';

const FormSection = styled.section`
width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
   
`;

const Form = styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    background-color:yellowgreen;
    padding:40px 40px 0 0;
    margin-bottom:50px;
`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

const FormLabel = styled.label`
    width: 30%;
    text-align: right;
    margin-right: 10px;
`;

const FormInput = styled.input`
    width: 70%;
    padding: 5px;
`;

const FormTextArea = styled.textarea`
    width: 70%;
    padding: 5px;
    height:100px;
`;
const FormButton = styled.button`
    width:100px;
    align-self:center;
    margin:0 0 20px 120px;
`
const ContactHeading = styled.h2`
width:100%;
  background-color: lightcoral;
`

const Contact = () => {
    return (
        <FormSection id="contact" className="contact">
            <ContactHeading>Contact</ContactHeading>
            <Form className="contact-form">
                <FormDiv>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormInput id="name" type="text" name="name" placeholder="Name" required />
                </FormDiv>

                <FormDiv>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput type="email" name="email" placeholder="Email" required />
                </FormDiv>

                <FormDiv>
                    <FormLabel htmlFor="subject">Subject</FormLabel>
                    <FormInput type="text" name="subject" placeholder="Subject" required />
                </FormDiv>

                <FormDiv>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormTextArea name="message" placeholder="Message" required />
                </FormDiv>
                
                <FormButton type="submit">Send</FormButton>
            </Form>
        </FormSection>
    );
}

export default Contact;
