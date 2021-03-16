import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Desculpe o Help360° ainda não está disponivel"
				content="Aguarde mais um pouco pois já estamos trabalhando para trazer um software completo para gestão de chamados via WHATSAPP e 
				em breve estará disponivel."
				illustration={HeroIllustration}
			/>
		</Layout>
	);
}
