import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  id: string;
  pw: string;
}

const LoginBox = styled.div``;

const Id = styled.input``;

const Pw = styled.input``;

const LoginBtn = styled.input``;

const Login = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <>
      <LoginBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Id {...register('id', { required: true, maxLength: 20 })} />
          <Pw
            type="password"
            {...register('pw', { required: true, maxLength: 20 })}
          />
          <LoginBtn type="submit" />
        </form>
      </LoginBox>
    </>
  );
};

export default Login;
