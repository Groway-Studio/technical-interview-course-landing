import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  gap: 0 1rem;
  grid-template-columns: repeat(4, calc(25% - 0.75rem));
  position: relative;
  width: 100%;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #ffffff;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 0.5em;
  height: 36px;
  background: #e5e5e5;
  border: none;
  border-radius: 10px;
  margin-bottom: 0.5em;
`;
export const TextArea = styled.textarea`
  padding: 0.5em;
  height: 108px;
  background: #e5e5e5;
  border: none;
  border-radius: 10px;
  margin-bottom: 0.5em;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
`;

export const Button = styled.button`
  background: #084887;
  border-radius: 10px;
  border-style: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  padding: 0 30px;
  position: absolute;
  right: 0;
  bottom: -95px;
`;
