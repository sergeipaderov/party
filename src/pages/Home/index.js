import React, { Component } from 'react'

import Fade from 'react-reveal/Fade'
import RubberBand from 'react-reveal/RubberBand'

import CategoryCard from '../../components/CategoryCard'

import { CardsWrapper, CardLink, CardsSection } from './style'

class HomePage extends Component {
  render() {
    return (
      <>
        <RubberBand>
          <div
            style={{
              borderRadius: '5px',
              width: '100%',
              height: '600px',
              margin: '0 20px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url('https://cdn.pixabay.com/photo/2016/10/22/20/52/balloons-1761634_960_720.jpg')`,
            }}
          >
            Some stuff
          </div>
        </RubberBand>

        <CardsSection>
          <Fade left>
            <CardsWrapper>
              <CardLink to="/decor" style={{ marginRight: '1%' }}>
                <CategoryCard
                  title="Decor"
                  bg="https://cdn.pixabay.com/photo/2017/11/04/17/26/christmas-cookies-2918172__480.jpg"
                />
              </CardLink>
              <CardLink to="/sweets">
                <CategoryCard
                  title="Doces"
                  bg="https://cdn.pixabay.com/photo/2015/03/26/23/09/cake-pops-693645_1280.jpg"
                />
              </CardLink>
            </CardsWrapper>
          </Fade>
          <Fade right>
            <CardsWrapper>
              <CardLink to="/flowers">
                <CategoryCard
                  title="Flores"
                  bg="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"
                />
              </CardLink>
            </CardsWrapper>
          </Fade>
          <Fade left>
            <CardsWrapper>
              <CardLink to="/photo" style={{ marginRight: '1%' }}>
                <CategoryCard
                  title="Foto"
                  bg="https://cdn.pixabay.com/photo/2014/05/22/22/05/photo-351528_1280.jpg"
                />
              </CardLink>
              <CardLink to="/souvenirs" style={{ marginRight: '1%' }}>
                <CategoryCard
                  title="Lembrancinhas"
                  bg="https://cdn.pixabay.com/photo/2015/01/11/21/24/puppets-596761__480.jpg"
                />
              </CardLink>
              <CardLink to="/animators">
                <CategoryCard
                  title="Animadores"
                  bg="https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074__480.jpg"
                />
              </CardLink>
            </CardsWrapper>
          </Fade>
          <Fade right>
            <CardsWrapper>
              <CardLink to="/other">
                <CategoryCard
                  title="Outros"
                  bg="https://cdn.pixabay.com/photo/2016/02/19/10/55/light-bulb-1209491_1280.jpg"
                />
              </CardLink>
            </CardsWrapper>
          </Fade>
        </CardsSection>
      </>
    )
  }
}

export default HomePage
