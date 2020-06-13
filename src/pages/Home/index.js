import React, { Component } from 'react'

import CategoryCard from '../../components/CategoryCard'

import { CardsWrapper } from './style'

class HomePage extends Component {
  render() {
    return (
      <>
        <CardsWrapper>
          <CategoryCard
            title="Decor"
            bg="https://cdn.pixabay.com/photo/2017/11/04/17/26/christmas-cookies-2918172__480.jpg"
          />
          <CategoryCard
            title="Doces"
            bg="https://cdn.pixabay.com/photo/2015/03/26/23/09/cake-pops-693645_1280.jpg"
          />
          <CategoryCard
            title="Flores"
            bg="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"
          />
        </CardsWrapper>
        <CardsWrapper>
          <CategoryCard
            title="Foto"
            bg="https://cdn.pixabay.com/photo/2014/05/22/22/05/photo-351528_1280.jpg"
          />
          <CategoryCard
            title="Lembrancinhas"
            bg="https://cdn.pixabay.com/photo/2015/01/11/21/24/puppets-596761__480.jpg"
          />
          <CategoryCard
            title="Animadores"
            bg="https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074__480.jpg"
          />
        </CardsWrapper>
        <CardsWrapper>
          <CategoryCard
            title="Outros"
            bg="https://cdn.pixabay.com/photo/2016/02/19/10/55/light-bulb-1209491_1280.jpg"
          />
        </CardsWrapper>
      </>
    )
  }
}

export default HomePage
