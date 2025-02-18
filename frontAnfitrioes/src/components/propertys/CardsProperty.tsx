import { Stack, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface PropsCardsProperty {
    id: number;
    nome: string;
    preco: number;
    loc: string;
    image: string;
    onFavorite: (id: number, isFavorited: boolean) => void;
}

export default function CardsProperty({ id, nome, preco, loc, image, onFavorite }: PropsCardsProperty) {
    const [isFavorited, setIsFavorited] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (favorites.includes(id)) {
            setIsFavorited(true);
        }
    }, [id]);

    const handleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (isFavorited) {
            favorites = favorites.filter((favId: number) => favId !== id);
        } else {
            favorites.push(id);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorited(!isFavorited);
        onFavorite(id, !isFavorited);
    };

    const styleStar = { position: 'absolute', top: '0.5rem', right: '0.5rem', cursor: 'pointer', color: 'white', fontSize: '2rem', zIndex: 2 };

    return (
        <Stack onClick={() => navigate(`/imovel/${id}`)} sx={{ flexDirection: 'column', width: '23rem' }}>
            <Typography fontSize={28} fontWeight={600} paddingBottom={2}>{nome}</Typography>
            <Stack sx={{ position: 'relative' }}>
                {isFavorited ? (
                    <StarIcon sx={styleStar} onClick={handleFavorite} />
                ) : (
                    <StarBorderIcon sx={styleStar} onClick={handleFavorite} />
                )}
                <img style={{ display: 'flex', width: 'auto', height: '15rem', borderRadius: '.8rem' }} src={image} alt={nome} />
            </Stack>
            <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 2 }}>
                <Typography fontSize={24}>{loc}</Typography>
                <Typography fontSize={24}>R$ {preco.toFixed(2)}</Typography>
            </Stack>
        </Stack>
    );
}
