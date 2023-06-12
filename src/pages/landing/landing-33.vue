<route lang="yaml">
meta:
  layout: default
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import { trendingNfts } from '/@src/data/pages/nft/trending'
import { newNfts } from '/@src/data/pages/nft/new'
import { popularNfts } from '/@src/data/pages/nft/popular'
import { nftSellers } from '/@src/data/pages/nft/sellers'
import { nftCollections } from '/@src/data/pages/nft/collections'
import { faq, boxedPosts } from '/@src/data/pages/nft'
import { nftMarquee } from '/@src/data/pages/nft/marquee'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroO1 />

    <Section>
      <Container>
        <SideBenefits
          subtitle="QUALITY DRIVEN"
          title="Your entire business, wether it's selling or buying"
          content="To grow your business on today’s dynamic marketplaces, you need
                an advantage.
                With our AI working continually behind the scenes, you can
                unlock growth opportunities and compete at the highest level
                24/7."
          image="/assets/illustrations/nft/main-features.png"
          dark-image="/assets/illustrations/nft/main-features-dark.png"
          image-width="1000"
          image-height="1000"
          :benefits="[
            'Upgrade your customer experience instantly',
            'Retain more, happier customers',
            'Start with done-for-you account setup',
            'Track results in real-time',
          ]"
          reverse
        />
      </Container>
    </Section>

    <LogoMarquee :logos="customerLogos" compact />

    <Section>
      <Container>
        <NftCarousel :slides="trendingNfts">
          <template #title>
            <CollectionTitle
              title="Trending 🔥"
              subtitle="Take a closer look at our trending items"
            />
          </template>
        </NftCarousel>

        <NftSellerGrid :items="nftSellers">
          <template #title>
            <CollectionTitle
              title="Top Sellers"
              subtitle="Take a closer look at our best artists"
            >
              <template #toolbar>
                <ActionLink label="View All" link="index" />
              </template>
            </CollectionTitle>
          </template>
        </NftSellerGrid>

        <NftCarousel :slides="newNfts">
          <template #title>
            <CollectionTitle
              title="Newest"
              subtitle="Take a closer look at our newest items"
            />
          </template>
        </NftCarousel>

        <NftCollectionGrid :items="nftCollections">
          <template #title>
            <CollectionTitle
              title="Top Collections"
              subtitle="Discover our greatest collections"
            >
              <template #toolbar>
                <ActionLink label="View All" link="index" />
              </template>
            </CollectionTitle>
          </template>
        </NftCollectionGrid>

        <NftCardGrid :items="popularNfts">
          <template #title>
            <CollectionTitle
              title="Popular"
              subtitle="Discover our most popular items"
            >
              <template #toolbar>
                <ActionLink label="View All" link="index" />
              </template>
            </CollectionTitle>
          </template>
        </NftCardGrid>
      </Container>
    </Section>

    <Section>
      <Container>
        <BlogBoxedGrid
          punchline="Easy-Peezy 👌"
          title="Resources to Get Started"
          subtitle="You should definitely subscribe to our news for daily tips and tricks"
          :posts="boxedPosts"
        />

        <DoubleFaqCollapse :left="faq.left" :right="faq.right" chevrons />
      </Container>
    </Section>

    <NftMarquee :items="nftMarquee" />

    <Section wave="wave-2" shape-color="footer-dark">
      <Container>
        <CtaBlockH
          small-text="Get Started"
          title="Start Selling"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
          image="/assets/nft/cta-bg.png"
          dark-image="/assets/nft/cta-bg-dark.png"
        >
          <Buttons>
            <Button to="/" color="primary" :long="2" bold raised>
              Get Started
            </Button>
            <Button to="/" :long="2" bold raised>Learn More</Button>
          </Buttons>
        </CtaBlockH>
      </Container>
    </Section>

    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="dark"
      :social-links="socialLinks"
    />
  </div>
</template>
