<template>
    <div>
        <div class="item" v-for='exp in experience'>
            <div class="content">
                <header class="expr-title">
                    <div class="info">
                        <h3 class="company">{{#if company}}{{company}}{{^}}{{project}}{{/if}}</h3>
                        <h4 class="summary">{{{summary}}}</h4>
                    </div>
                    <aside class="timeline">
                        <time>{{start}} {{#if end}}~ {{end}}{{^}}至今{{/if}}</time>
                    </aside>
                </header>
                <dl class="details">
                    {{#each description}}
                        <dt>
                            {{~{this}~}}
                        </dt>
                    {{/each}}
                </dl>
            </div>
        </div>
    <div>
</template>