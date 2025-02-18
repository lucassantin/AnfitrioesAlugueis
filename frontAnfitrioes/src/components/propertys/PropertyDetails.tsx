import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Stack } from '@mui/material';
import Navbar from './Navbar';

interface Property {
    id: number;
    nome: string;
    preco: number;
    localizacao: string;
    imagem: string;
}

export default function PropertyDetails() {
    const { id } = useParams<{ id: string }>();
    const [property, setProperty] = useState<Property | null>(null);

    useEffect(() => {
        axios.get<Property>(`/properties/${id}`)
            .then(response => setProperty(response.data))
            .catch(error => console.error('Erro ao buscar os detalhes da acomodação:', error));
    }, [id]);

    if (!property) {
        return <Typography>Carregando...</Typography>;
    }

    return (
        <Container>
            <Navbar />
            <Stack paddingTop={{xs: 9, md: 12}}>
                <Typography paddingBottom={2} color='black' fontSize={28} fontWeight={600}>{property.nome}</Typography>
                <Stack width={'auto'} height={{xs: '13.5rem', md: '25rem'}}><img style={{ borderRadius: '.8rem', width: 'auto', height: '100%' }} src={property.imagem} alt={property.nome} /></Stack>
                <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 2 }}>
                    <Typography color='black' fontSize={24}>{property.localizacao}</Typography>
                    <Typography color='black' fontSize={24}>R$ {property.preco.toFixed(2)}</Typography>
                </Stack>
            </Stack>
        </Container>
    );
}
