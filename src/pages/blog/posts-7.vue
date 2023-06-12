<script setup lang="ts">
import { posts } from '/@src/data/pages/blog'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <div class="mx-auto max-w-9">
          <PageTitle title="Our Latest News" subtitle="Company Blog">
            <template #content>
              <div class="mx-auto max-w-6 mt-2">
                <p class="paragraph rem-115">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vides, quid faciat. Mihi vero, inquit, placet agi subtilius
                  et, ut ipse.
                </p>
              </div>

              <div class="mx-auto max-w-4 mt-4">
                <SubscriptionCompact
                  label="Subscribe"
                  placeholder="Enter your email"
                />
              </div>
            </template>
          </PageTitle>
        </div>

        <BlogList :posts="posts" single-list />

        <div class="load-more py-6">
          <div class="buttons is-centered">
            <Button color="primary" :long="3" raised bold>Load More</Button>
          </div>
        </div>
      </Container>
    </Section>

    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
