import React, { useState } from 'react';
import { Button, Input, VStack } from '@chakra-ui/react';

interface LoginPageProps {
    onLogin: () => void;  
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in with:', username, password);
        onLogin(); 
    };

    return (
        <VStack spacing={4} align='stretch'>
            <Input
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                placeholder='Password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button colorScheme='blue' onClick={handleLogin}>Log In</Button>
        </VStack>
    );
};

export default LoginPage;
