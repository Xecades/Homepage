<script setup lang="ts">
import { render } from "@/assets/ts/partials";
import { isProxy, ref, watch } from "vue";

import setupReveal from "@/assets/ts/reveal";
import cursor from "@/assets/ts/cursor";

import type { Element } from "@/assets/ts/partials";
import type { JSX } from "vue/jsx-runtime";

export interface HomeLayoutData {
    title: string;
    subtitle: string;
    body: (Element | Element[])[];
}

const props = defineProps<{ data: HomeLayoutData }>();
const VBody = ref<JSX.Element>(render(props.data));

setupReveal();
cursor.setup();

if (isProxy(props.data)) {
    watch(props.data, () => {
        VBody.value = render(props.data);
    });
}
</script>

<template>
    <div class="layout" id="main">
        <h1 class="title rv">{{ data.title }}</h1>
        <div class="subtitle rv indent">{{ data.subtitle }}</div>
        <div class="body">
            <VBody />
        </div>
    </div>
</template>

<style>
.layout {
    --hover-color: #f3f4f6;

    width: 40rem;
    margin: 0 auto;
    padding-top: 10rem;
    padding-bottom: 10rem;
    text-align: justify;
}

.layout .title {
    font-size: 3rem;
    letter-spacing: 0.05em;
    margin-bottom: 12px;
    height: 4.5rem;
}

.layout .subtitle {
    font-weight: bold;
}

.layout .subtitle,
.layout p {
    font-size: 1.125rem;
    line-height: 2.4rem;
    margin-bottom: 0.5rem;
}

/* hr */

.layout hr {
    height: 0px;
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 0.5rem;
}

/* small */

.layout p.small {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* table */

.layout .table ul {
    margin: 0 8px;
    padding: 0 40px;
}

.layout .table li {
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 2px 16px;
    margin: 4px 0;
    border-radius: 8px;
    transition: background-color 0.2s;
}

.layout .table li:hover {
    background-color: var(--hover-color);
}

.layout .table li a {
    display: inline-block;
    min-width: 13rem;
    padding: 6px 0;
}

.layout .table li span {
    font-size: 1rem;
    line-height: 1.5rem;
}

/* timeline */

.layout .timeline ul.tl {
    margin: 0 8px;
    padding: 28px 40px;
}

.layout .timeline li.tl {
    display: block;
    margin-bottom: 56px;
    padding: 8px 0;
}

.layout .timeline li.tl:last-child {
    margin-bottom: 0;
}

.layout .timeline .year {
    display: block;
    font-weight: 700;
    font-size: 6rem;
    user-select: none;
    color: #f5f5f4;
    transform: translate(-8rem, 3.5rem) rotate(-90deg);
    position: absolute;
}

.layout .timeline ul.yr {
    min-height: 210px;
}

.layout .timeline li.yr {
    font-size: 1rem;
    line-height: 2.25rem;
    margin-left: 2rem;
    margin-bottom: 8px;
    padding: 0 16px;
    border-radius: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: background-color 0.3s;
}

.layout .timeline li.yr:hover {
    background-color: var(--hover-color);
}

.layout .timeline .date {
    display: inline-block;
    min-width: 10rem;
}

.layout .timeline hr:first-child {
    margin-bottom: 0;
}

.layout .timeline hr:last-child {
    margin-top: 0;
    margin-bottom: 1.3rem;
}

/* sponsor */

.layout .sponsor {
    margin: 12px 0px 12px 22px;
}

.layout .sponsor img {
    margin: 0 13px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    box-sizing: border-box;
    width: 220px;
    aspect-ratio: 621 / 843;
    max-width: 50%;
    display: inline-block;
}

@media (prefers-color-scheme: dark) {
    .layout {
        --hover-color: #181818;
    }

    .layout .sponsor img {
        border-color: #4a525a;
        filter: brightness(0.8);
    }

    .layout .timeline .year {
        color: #292a2b;
    }
}

@media (max-width: 768px) {
    .layout {
        width: unset;
        margin: 0 2.8rem;
        padding-top: 5rem;
        padding-bottom: 5rem;
    }

    .layout .title {
        font-size: 2.5rem;
        height: 4.5rem;
        margin-bottom: 0;
    }

    .layout .subtitle,
    .layout p {
        font-size: 1rem;
        line-height: 2.1rem;
    }

    /* hr */

    .layout hr {
        margin: 1.5rem 0.5rem;
    }

    /* table */

    .layout .table ul {
        padding: 0 10px;
    }

    .layout .table li {
        font-size: 1rem;
        margin: 10px 0;
    }

    .layout .table li a {
        width: 100%;
    }

    .layout .table li span {
        font-size: 0.9rem;
    }

    .layout .table li:hover {
        background-color: unset;
    }

    /* timeline */

    .layout .timeline ul.tl {
        padding: 28px 15px;
    }

    .layout .timeline li.tl {
        display: block;
        margin-bottom: 56px;
        padding: 8px 0;
    }

    .layout .timeline .year {
        transform: translate(-6rem, 2.5rem) rotate(-90deg);
    }

    .layout .timeline li.yr {
        font-size: 0.9rem;
        line-height: 2.1rem;
        padding: 0 0 0 16px;
    }

    .layout .timeline li.yr:hover {
        background-color: unset;
    }

    .layout .timeline .date {
        display: none;
    }

    /* sponsor */

    .layout .sponsor {
        margin: 12px 0;
        display: flex;
        gap: 10px;
    }

    .layout .sponsor img {
        margin: 0;
        max-width: calc((100% - 10px) / 2);
    }
}
</style>
