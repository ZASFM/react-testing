import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Login from "./login"

jest.mock('axios',()=>({

   __esModules:true,

   default:{
      get:()=>({
         data:{id:"1",name:"Gerardo de la rosa familia galvan"}
      })
   }
}))

//testing the inputs to be in the document
test('username input should be rended',()=>{
   render(<Login/>);
   const input=screen.getByPlaceholderText(/username/i);
   expect(input).toBeInTheDocument();
})

test('password input should be rended',()=>{
   render(<Login/>);
   const input=screen.getByPlaceholderText(/password/i);
   expect(input).toBeInTheDocument();
})

test('button input should be rended',()=>{
   render(<Login/>);
   const input=screen.getByRole('button');
   expect(input).toBeInTheDocument();
})

//testing the inputs to be empty
test('user input should be empty',()=>{
   render(<Login/>);
   const input=screen.getByPlaceholderText(/username/i);
   expect(input.value).toBe('');
})

test('password input should be empty',()=>{
   render(<Login/>);
   const input=screen.getByPlaceholderText(/password/i);
   expect(input.value).toBe('');
})

test('button should be disbales',()=>{
   render(<Login/>);
   const button=screen.getByRole('button');
   expect(button).toBeDisabled();
})

test('loading should not be rendered',()=>{
   render(<Login/>);
   const input=screen.getByRole('button');
   expect(input).not.toHaveTextContent(/Loading/i)
})


test('error message should not be visibel',()=>{
   render(<Login/>);
   const error=screen.getByTestId('error');
   expect(error).not.toBeVisible();
})

//events: on change i want the input to aqquire a certain value:
test('username input should change',()=>{
   render(<Login/>);
   const usernameInput=screen.getByPlaceholderText(/username/i);
   const testValue='test';
   fireEvent.change(usernameInput,{target:{value:testValue}});
   expect(usernameInput.value).toBe(testValue);
})

test('password input should change',()=>{
   render(<Login/>);
   const usernameInput=screen.getByPlaceholderText(/password/i);
   const testValue='test';
   fireEvent.change(usernameInput,{target:{value:testValue}});
   expect(usernameInput.value).toBe(testValue);
})

//expecting my button not to be disables when my inputs have a value
test('button should not be disables when input exists',()=>{
   render(<Login/>);
   const button=screen.getByRole('button');
   const usernameInput=screen.getByPlaceholderText(/username/i);
   const passwordInput=screen.getByPlaceholderText(/password/i);
   const testValue='test';
   fireEvent.change(usernameInput,{target:{value:testValue}});
   fireEvent.change(passwordInput,{target:{value:testValue}});
   expect(button).not.toBeDisabled();
})

//here im adding inputs, and then im passing at the fetching stage so it should be in saying loading:
test('loading should be rendered at click',()=>{
   render(<Login/>);
   const input=screen.getByRole('button');
   const usernameInput=screen.getByPlaceholderText(/username/i);
   const passwordInput=screen.getByPlaceholderText(/password/i);
   const testValue='test';
   fireEvent.change(usernameInput,{target:{value:testValue}});
   fireEvent.change(passwordInput,{target:{value:testValue}});
   fireEvent.click(input);
   expect(input).toHaveTextContent(/Loading/i)
})

test('loading should not be rendered at click',async()=>{
   render(<Login/>);
   const input=screen.getByRole('button');
   const usernameInput=screen.getByPlaceholderText(/username/i);
   const passwordInput=screen.getByPlaceholderText(/password/i);
   const testValue='test';
   fireEvent.change(usernameInput,{target:{value:testValue}});
   fireEvent.change(passwordInput,{target:{value:testValue}});
   fireEvent.click(input);
   await waitFor(()=>expect(input).not.toHaveTextContent(/Loading/i))
})

test('user should not be rendered after fetching',async()=>{
   render(<Login/>);
   const input=screen.getByRole('button');
   const usernameInput=screen.getByPlaceholderText(/username/i);
   const passwordInput=screen.getByPlaceholderText(/password/i);
   const testValue='test';
   fireEvent.change(usernameInput,{target:{value:testValue}});
   fireEvent.change(passwordInput,{target:{value:testValue}});
   fireEvent.click(input);

   //cant use getByText because we are await to get the name
   const userItem=await screen.findByText('Gerardo de la rosa familia galvan')

   expect(userItem).toBeInTheDocument();
})





