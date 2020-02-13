import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const prop = name => obj => obj ? obj[name] : undefined;
const extract = (maybeF,...args) => typeof(maybeF) === "function" ? maybeF(...args) : maybeF;
const onDisabled = (on,off) => props => extract(props.disabled ? on : off, props)

const getDisabledColor = onDisabled("gray","black");
const getBackground = onDisabled("gray","transparent");
const getCursor = onDisabled("default","pointer");
const getAnimation = onDisabled(props =>`cooldown-animation ${props.cooldown}s linear 1`,"none");

const StyledCooldown = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  background-color: ${getBackground};
  width: 100%;
  height: 100%;

  animation: ${getAnimation};

  @keyframes cooldown-animation {
    0%   { width: 100% }
    100% { width: 0% }
  }
`

const StyledButton = styled.button`
  position: relative;
  border-style: solid;
  border-width: 3px;
  border-color: ${getDisabledColor};
  color: ${getDisabledColor};
  cursor: ${getCursor};
`

const CooldownButton = (props) => {
  const { cooldown, children } = props
  const [ disabled, setDisabled ] = useState(false);
  const toggleDisabled = () => {
    setDisabled(!disabled)
  }
  const handleClick = (e) => {
    props.onClick && props.onClick(e)
    toggleDisabled();
  }
  return(
    <StyledButton 
      disabled={disabled} 
      onClick={handleClick}
    >
      {children}
      <StyledCooldown 
        cooldown={cooldown} 
        disabled={disabled} 
        className={disabled ? "cooldown" : ""} 
        onAnimationEnd={toggleDisabled}
      />
    </StyledButton>
  )
}

export default CooldownButton;