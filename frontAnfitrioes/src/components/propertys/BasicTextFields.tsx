import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

interface BasicTextFieldsProps {
    onCityChange: (city: string) => void;
}

export default function BasicTextFields({ onCityChange }: BasicTextFieldsProps) {
    const [city, setCity] = useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedCity = event.target.value;
        setCity(selectedCity);
        onCityChange(selectedCity);
    };

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { marginLeft: {xs: 4, sm: 1}, backgroundColor: 'whitesmoke', width: '20rem'}}}
            noValidate
            autoComplete="off"
        >
        <TextField
            id="outlined-basic"
            label="Cidade"
            variant="outlined"
            value={city}
            onChange={handleChange}
        />
    </Box>
    );
}
