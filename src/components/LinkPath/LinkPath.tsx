import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 7px;
  align-items: center;
  margin-top: 8px;
`;

interface StyledContainerProps {
    children: React.ReactNode;
  }
  
  const LinkPath = ({ children }: StyledContainerProps) => {
    const elements = React.Children.toArray(children);
  
    return (
      <Container>
        {elements.map((child, index) => (
          <React.Fragment key={index}>
            {child}
            {index !== elements.length - 1 && (
              <Image src="/img/LinkPath/svg/arr.svg" width={4} height={7} alt="arrow" />
            )}
          </React.Fragment>
        ))}
      </Container>
    );
  };
  
  export default LinkPath;
