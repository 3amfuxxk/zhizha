import React from "react";
import styled from 'styled-components';

interface ContainerProps {
    children: React.ReactNode;
  }
  
  const Container = ({ children }: ContainerProps) => (
    <Wrapper className="container">{children}</Wrapper>
  );
  
  const Wrapper = styled.div`
    width: 1262px;
    margin: 0 auto;
    position: relative;
    height: 1920px;
  `;
  
  export default Container;