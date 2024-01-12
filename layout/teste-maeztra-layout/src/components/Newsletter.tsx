import { NewsletterContainer, Title, Form, Input, Button } from "../styles/NewsletterStyle";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <Title>Receba Nossa Newsletter</Title>
      <Form>
        <Input type="email" placeholder="Digite seu e-mail" />
        <Button type="submit">Enviar</Button>
      </Form>
    </NewsletterContainer>
  );
};

export default Newsletter;
