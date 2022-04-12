'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">movie-review-front-end documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-65894c5e66a7c768b56785c9623204f2c712a484a872338b4c5844c7030e2e95dd4928e3c9b6df7b1f6b1ab57c93ca9f390b0b0c8b7557e7afb041323d59b2c4"' : 'data-target="#xs-components-links-module-AppModule-65894c5e66a7c768b56785c9623204f2c712a484a872338b4c5844c7030e2e95dd4928e3c9b6df7b1f6b1ab57c93ca9f390b0b0c8b7557e7afb041323d59b2c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-65894c5e66a7c768b56785c9623204f2c712a484a872338b4c5844c7030e2e95dd4928e3c9b6df7b1f6b1ab57c93ca9f390b0b0c8b7557e7afb041323d59b2c4"' :
                                            'id="xs-components-links-module-AppModule-65894c5e66a7c768b56785c9623204f2c712a484a872338b4c5844c7030e2e95dd4928e3c9b6df7b1f6b1ab57c93ca9f390b0b0c8b7557e7afb041323d59b2c4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CombinedDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CombinedDisplayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MoviePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoviePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PieChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PieChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchResultsPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchResultsPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SentimentDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SentimentDisplayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WordCloudComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WordCloudComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WordFrequencyDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WordFrequencyDisplayComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CombinedDisplayComponent.html" data-type="entity-link" >CombinedDisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomePageComponent.html" data-type="entity-link" >HomePageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MenuBarComponent.html" data-type="entity-link" >MenuBarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MovieComponent.html" data-type="entity-link" >MovieComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MovieListComponent.html" data-type="entity-link" >MovieListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MoviePageComponent.html" data-type="entity-link" >MoviePageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PieChartComponent.html" data-type="entity-link" >PieChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReviewComponent.html" data-type="entity-link" >ReviewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReviewListComponent.html" data-type="entity-link" >ReviewListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReviewPageComponent.html" data-type="entity-link" >ReviewPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchResultsPageComponent.html" data-type="entity-link" >SearchResultsPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SentimentDisplayComponent.html" data-type="entity-link" >SentimentDisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WordCloudComponent.html" data-type="entity-link" >WordCloudComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WordFrequencyDisplayComponent.html" data-type="entity-link" >WordFrequencyDisplayComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MovieService.html" data-type="entity-link" >MovieService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReviewService.html" data-type="entity-link" >ReviewService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/HoverEvent.html" data-type="entity-link" >HoverEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Movie.html" data-type="entity-link" >Movie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Options.html" data-type="entity-link" >Options</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Review.html" data-type="entity-link" >Review</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});