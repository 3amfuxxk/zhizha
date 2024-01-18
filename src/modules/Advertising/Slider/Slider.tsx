import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import { useState, useEffect } from "react";
import { Roboto } from "next/font/google";
import Button from "../../../components/Button/Button";
import SliderAddToCart from "../../../components/SliderAddToCart/SliderAddToCart";
import axios from "axios";

const roboto = Roboto({
    weight: ["100", "300", "400"],
    subsets: ["cyrillic", "latin"],
    style: ["normal", "italic"],
})

const SliderContainer = styled.div`
    display: flex;
    width: 771px;
    height: 100%;
    flex-shrink: 0;
    border-radius: 18px;
    background: #141414;
    padding: 29px 29px 14px 29px;
    flex-direction: column;
    @media (max-width: 430px) {
        width: 100%;
        height: auto;
        flex-direction: column;
        padding: 22px 17px 17px 17px;
    }
`
const HeaderText = styled.p`
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    @media (max-width: 430px) {
        font-size: 24px;   
    }
`
const SliderBlock = styled.div`
    display: flex;
    width: auto;
    height: 352px;
    flex-shrink: 0;
    margin-top: 17px;
    overflow: hidden;
    gap: 0px;
    scroll-behavior: smooth;
    @media (max-width: 430px) {
        height: 707px;
        margin-top: 13px;
    }
`
const Card = styled.div`
    display: flex;
    width: 713px;
    height: 100%;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #282828;
    background: #1F1E1F;
    padding: 14px;
    gap: 17px;
    @media (max-width: 430px) {
        flex-direction: column;
        padding: 13px;
        width: 100%;   
        gap: 7px;
    }
`
const ImageBlock = styled.div`
    display: flex;
    width: 324px;
    height: 324px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #181818;
    overflow: hidden;
    @media (max-width: 430px) {
        width: 100%;
        height: 350px;
    }
`
const Img = styled(Image)`
    @media (max-width: 430px) {
        max-width: 100%;
        width: 350px;
        height: 350px;   
    }
`
const ProductInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 8px 0px;
    @media (max-width: 430px) {
        padding: 0px;   
    }
`
const ProductName = styled.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
`
const ShortDesc = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
`
const DescText = styled.p`
    color: rgba(255, 255, 255, 0.80);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
`
const NicoBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    height: auto;
    margin-top: 9px;
    @media (max-width: 430px) {
        margin-top: 19px;
    }
`
const NicoName = styled.p`
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    font-weight: 800;
    line-height: 100%;
    margin-left: 2px;
`
const NicoOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    max-height: 68px;
    width: 100%;
`
interface BlockProps {
    isSelected: boolean;
}
const BlockProps = styled.div<BlockProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 32px;
    padding: 0px 13px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid ${(props) => (props.isSelected ? 'rgba(255, 255, 255, 0.70)' : '#292929')};
    background-color: ${(props) => (props.isSelected ? '#272727' : '#141414')};
    cursor: pointer;
    transition: all 0.3s ease;
    @media (max-width: 430px) {
        padding: 0px 16px;
        height: 40px;
    }
    &:hover {
        border-color: #fff;
    }
`
const Text = styled.p`
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    @media (max-width: 430px) {
     font-size: 15px;   
    }
`
const PriceBlock = styled.div`
    display: flex;
    margin-top: 22px;
    gap: 17px;
    width: 100%;
`
const StartingPrice = styled.p`
    color: #8F8E8F;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 1.2px;
    text-decoration: line-through;
`
const SalePrice = styled.p`
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: 1.2px;
`
const FuncionBlock = styled.div`
    display: flex;
    width: 100%;
    gap: 9px;
    margin-top: 13px;
`
const FavBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #292929;
    background: #141414;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        border-color: #fff;
    }
    
`
const FunctionBlock = styled.div`
    display: flex;
    margin-top: auto;
    width: 100%;
    flex-direction: column;
`
const NavSlider = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: auto;
    gap: 9px;
    margin-top: 14px;
`
const NavArrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 50%;
    border: 1px solid #292929;
    background: #141414;
    cursor: pointer;
    user-select: none;
    transition: border-color 0.3s ease;
    &:hover {
        border-color: #fff;
    }
`
const BulletNav = styled.div`
    display: flex;
    width: 84px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 26px;
    border: 1px solid #292929;
    background: #141414;
    align-items: center;
    justify-content: center;
    gap: 8px;
`
const Bullet = styled.span`
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #2D2D2D;

    &.active {
    background: white;
  }
`
const ButtonContainer = styled.div`
    display: flex;
    width: 142px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #B6020D;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const TextButton = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const ButtonBlock = styled.div`
    display: flex;
    gap: 7px;
`
const Imgs = styled(Image)`
    @media (max-width: 430px) {
        width: 16px;
        height: 18px;
    }
`
interface Product {
    id: string;
    title: string;
    code: number;
    desc: string;
    ice: boolean;
    image: string;
    categories: string[];
    options: ProductOption[];
}
interface ProductOption {
    id: number;
    starting_price: number;
    sale_price: number;
    discount: number;
    in_stock: boolean;
    nico: number;
    volume: number;
}

const Slider = () => {

    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://rainzhizha.com/api/v1/products/slider/`);
                const productsData = response.data as Product[];
                setProducts(productsData);
            } catch (error) {
                setProducts(null);
            }
        };

        fetchProduct();
    }, []);

    const [selectedNico, setSelectedNico] = useState<number>(-1);

    const [uniqueNico, setUniqueNico] = useState<number[]>([]);
    useEffect(() => {
        if (products) {
            const allNico = products.reduce((acc, product) => {
                if (product.options) {
                    product.options.forEach(option => {
                        if (option.nico !== undefined && !acc.includes(option.nico)) {
                            acc.push(option.nico);
                        }
                    });
                }
                return acc;
            }, [] as number[]);

            const uniqueNicoSet = new Set(allNico);
            const uniqueNicoArray = Array.from(uniqueNicoSet);

            setUniqueNico(uniqueNicoArray);
        }
    }, [products]);

    const [showProduct, setShowProduct] = useState<any>(null);
    const handleToAddToCart = (item: Product) => {
        setShowProduct(item);
    };
    const handleOpen = () => {
        const addContainer = document.getElementById('add-container-slider');
        if (addContainer) {
            addContainer.style.display = 'flex';
        }
        console.log('a');
    };
    const handleAll = () => {
        handleOpen();
    }

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isSlideMoving, setSlideMoving] = useState(false);
    if (typeof document !== 'undefined') {
        const slider = document.getElementById("slider");

        if (slider !== null) {
            slider.addEventListener('scroll', () => {
                setSlideMoving(true);
            });
            slider.addEventListener('scrollend', () => {
                setSlideMoving(false);
            })
        }
    }


    const updateBulletColors = () => {
        if (typeof document !== 'undefined') {
            const bullets = document.querySelectorAll('.bullet');

            bullets.forEach((bullet, index) => {
                if (index === currentSlideIndex) {
                    bullet.classList.add('active');
                } else {
                    bullet.classList.remove('active');
                }
            });
        }
    };

    const slideLeft = () => {
        if (typeof document !== 'undefined' && typeof window !== 'undefined') {
            if (!isSlideMoving) {
                const slide = document.querySelector('.slide-slide');
                if (slide) {
                    const slideWidth = slide.getBoundingClientRect().width;
                    const slider = document.getElementById('slider');

                    const newIndex = currentSlideIndex - 1 < 0 ? 0 : currentSlideIndex - 1;

                    if (slider !== null) {
                        slider.scrollLeft = slider.scrollLeft - slideWidth;
                        setCurrentSlideIndex(newIndex);
                        updateBulletColors();
                    }
                }
            }
        }
    };

    const slideRight = () => {
        if (typeof document !== 'undefined' && typeof window !== 'undefined') {
            if (!isSlideMoving) {
                const slide = document.querySelector('.slide-slide');
                if (slide) {
                    const slideWidth = slide.getBoundingClientRect().width;
                    const slider = document.getElementById('slider');

                    const newIndex = currentSlideIndex + 1 > 2 ? 2 : currentSlideIndex + 1;

                    if (slider !== null) {
                        slider.scrollLeft = slider.scrollLeft + slideWidth;
                        setCurrentSlideIndex(newIndex);
                        updateBulletColors();
                    }
                }
            }
        }
    };

    return (
        <SliderContainer>
            <HeaderText>
                Топ продажів цього тижня:
            </HeaderText>
            <SliderAddToCart product={showProduct} />
            <SliderBlock id="slider">
                {products?.map((item, index) => (
                    <Card key={index} className="slide-slide">
                        <ImageBlock>
                            <Img src={item.image} width={324} height={324} alt="" />
                        </ImageBlock>
                        <ProductInfo>
                            <ProductName>
                                {item.title}
                            </ProductName>
                            <ShortDesc>
                                <DescText className={roboto.className}>
                                    {item.desc}
                                </DescText>
                            </ShortDesc>
                            <NicoBlock>
                                <NicoName>
                                    Міцність:
                                </NicoName>
                                <NicoOptions>
                                    {uniqueNico.map((nico, index) => (
                                        <BlockProps
                                            key={index}
                                            isSelected={selectedNico === nico}
                                            onClick={() => setSelectedNico(nico)}>
                                            <Text>
                                                {nico / 10}%({nico}мг)
                                            </Text>
                                        </BlockProps>
                                    ))}
                                </NicoOptions>
                            </NicoBlock>
                            <FunctionBlock>
                                <PriceBlock>
                                    <StartingPrice>
                                        {item.options[0].starting_price}
                                    </StartingPrice>
                                    <SalePrice>
                                        {item.options[0].sale_price}
                                    </SalePrice>
                                </PriceBlock>
                                <FuncionBlock>
                                    <ButtonContainer onClick={() => { handleToAddToCart(item); handleOpen() }}>
                                        <ButtonBlock>
                                            <Image src={'/img/Advertising/Slider/cart.svg'} width={13} height={16} alt="" />
                                            <TextButton>
                                                В кошик
                                            </TextButton>
                                        </ButtonBlock>
                                    </ButtonContainer>
                                    {/* <Button text='В кошик' width={135} height={38} onClick={() => { handleToAddToCart(item); handleOpen() }}>
                                        <Image src={'/img/Advertising/Slider/cart.svg'} width={13} height={16} alt="" />
                                    </Button> */}
                                    <FavBlock>
                                        <Imgs src={'/img/Advertising/Slider/heart.svg'} width={16} height={13.955} alt="" />
                                    </FavBlock>
                                </FuncionBlock>
                            </FunctionBlock>
                        </ProductInfo>
                    </Card>
                ))}
            </SliderBlock>
            <NavSlider>
                <NavArrow onClick={slideLeft}>
                    <Image src={'/img/Advertising/Slider/arrow-left.svg'} width={4} height={8} alt="" />
                </NavArrow>
                <BulletNav>
                    <Bullet className={currentSlideIndex === 0 ? 'bullet active' : 'bullet'} />
                    <Bullet className={currentSlideIndex === 1 ? 'bullet active' : 'bullet'} />
                    <Bullet className={currentSlideIndex === 2 ? 'bullet active' : 'bullet'} />
                </BulletNav>
                <NavArrow onClick={slideRight}>
                    <Image src={'/img/Advertising/Slider/arrow-right.svg'} width={4} height={8} alt="" />
                </NavArrow>
            </NavSlider>
        </SliderContainer>
    )
}

export default Slider;