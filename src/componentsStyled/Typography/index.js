import styled from 'styled-components'

export const Title = styled.h2`
  display: flex;
  font-weight: normal;
  font-size: 2.4rem;
  margin: 0;
  padding: 0.1rem;
  align-self: center;
`
export const Subtitle = styled(Title)`
  font-weight: normal;
  font-size: 1.8rem;
  text-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
`

export const Field = styled.p`
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
  padding: 0.1rem;
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
`

export const Text = styled.p`
  display: flex;
  font-size: 1.4rem;
  font-weight: normal;
  margin: 0;
  padding: 0.1rem;
  text-shadow: 0.1rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
`
