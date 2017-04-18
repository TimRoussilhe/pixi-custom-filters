# Usage

```
var customFilters = {
    DistortFilter: require('./Filter/distort/DistortFilter')
};
Object.assign(PIXI.filters, customFilters);

this.distortFilter = new customFilters.DistortFilter();
this.container.filters = [this.distortFilter];

```