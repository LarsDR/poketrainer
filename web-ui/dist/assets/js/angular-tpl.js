(function(module) {
try {
  module = angular.module('poketrainer.Module.Templates');
} catch (e) {
  module = angular.module('poketrainer.Module.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('states/pokemons/pokemons.tpl.html',
    '<md-content class="md-padding"><div class="page-header"><h1>Pok&eacute;mon <small>({{ pokemons.length }})</small></h1></div><md-progress-circular ng-if="isLoading" md-mode="indeterminate"></md-progress-circular><pre>{{pokemons | json}}</pre></md-content>');
}]);
})();

(function(module) {
try {
  module = angular.module('poketrainer.Module.Templates');
} catch (e) {
  module = angular.module('poketrainer.Module.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('states/abstracts/header.tpl.html',
    '<md-toolbar layout="row"><div class="md-toolbar-tools"><md-button ng-hide="state===\'public.users\'" class="md-icon-button" ng-click="toggleSidebar()" aria-label="Settings" hide-gt-sm=""><md-icon>menu</md-icon></md-button><h2><span>PokéTrainer</span></h2><span flex=""></span><md-button ui-sref="public.users()" class="md-raised" aria-label="Bots">Bots Overview</md-button></div></md-toolbar>');
}]);
})();

(function(module) {
try {
  module = angular.module('poketrainer.Module.Templates');
} catch (e) {
  module = angular.module('poketrainer.Module.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('states/abstracts/navigation.tpl.html',
    '<md-sidenav ng-hide="state===\'public.users\'" md-is-locked-open="$mdMedia(\'gt-sm\')" class="md-whiteframe-4dp" md-component-id="left" flex=""><md-list><md-list-item ui-sref="public.status(params)"><md-icon>home</md-icon><p>STATUS</p></md-list-item><md-list-item ui-sref="public.pokemons(params)"><md-icon>home</md-icon><p>POKEMON</p></md-list-item><md-list-item ui-sref="public.inventory(params)"><md-icon>home</md-icon><p>INVENTORY</p></md-list-item></md-list></md-sidenav>');
}]);
})();

(function(module) {
try {
  module = angular.module('poketrainer.Module.Templates');
} catch (e) {
  module = angular.module('poketrainer.Module.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('states/users/users.tpl.html',
    '<md-content id="content" class="container"><h1>Bots</h1><md-list><md-list-item ng-repeat="user in users"><a ui-sref="public.status({username: user.username})">{{ user.username }} - {{ user.status }}</a></md-list-item></md-list></md-content>');
}]);
})();

(function(module) {
try {
  module = angular.module('poketrainer.Module.Templates');
} catch (e) {
  module = angular.module('poketrainer.Module.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('states/status/status.tpl.html',
    '<md-content class="md-padding"><div class="page-header"><h1>Status: {{ user.username }} <small>Level: {{ user.level }} | Stardust: {{ user.stardust | number }}</small></h1></div><ui-gmap-google-map center="map.center" zoom="map.zoom"><ui-gmap-marker coords="marker.coords" options="marker.options" events="marker.events" idkey="marker.id"></ui-gmap-marker></ui-gmap-google-map><div class="row m-t-16"><div class="col-md-3 text-center"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Level XP:<br>{{ user.level_xp | number}}/{{ user.goal_xp | number}}</h3></div><div class="panel-body"><span class="chart" easypiechart="" percent="user.xpPercent" options="expLvlOptions"><span class="percent" ng-bind="user.xpPercent"></span></span></div></div></div><div class="col-md-3 text-center"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Unique Pokemon:<br>{{ user.unique_pokedex_entries }}/151</h3></div><div class="panel-body"><span class="chart" easypiechart="" percent="user.uniquePokedexPercent" options="uniquePokedexOptions"><span class="percent" ng-bind="user.uniquePokedexPercent"></span></span></div></div></div><div class="col-md-3 text-center"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Pokemon Bag:<br>{{ user.pokemon.length }}/{{ user.pokemon_capacity }}</h3></div><div class="panel-body"><span class="chart" easypiechart="" percent="user.pokemonInvPercent" options="pokemonInvOptions"><span class="percent" ng-bind="user.pokemonInvPercent"></span></span></div></div></div><div class="col-md-3 text-center"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Item Bag:<br>{{ user.current_item_storage }}/{{ user.item_capacity }}</h3></div><div class="panel-body"><span class="chart" easypiechart="" percent="user.itemsInvPercent" options="itemsInvOptions"><span class="percent" ng-bind="user.itemsInvPercent"></span></span></div></div></div></div><div class="row m-t-16"><div class="col-md-12"><table datatable="ng" class="row-border hover"><thead><th>Recent</th><th>#</th><th>Name</th><th>Lvl</th><th>Score</th><th>IV</th><th>CP</th><th>Max CP</th><th>Candies</th><th>Candy Needed</th><th>Dust Needed</th><th>Power Up</th><th>Stamina</th><th>Att IV</th><th>Sta IV</th><th>Def IV</th><th>Move 1</th><th>Move 2</th><th>Transfer</th></thead><tbody><tr ng-repeat="pokemon in user.pokemon"><td data-order="{{ pokemon.creation_time_ms }}"><md-tooltip md-direction="right">Caught:{{ pokemon.creation_time_ms | date : \'medium\' }}</md-tooltip><img style="max-height: 50px;" ng-src="assets/images/pokemon/{{(\'000\' + pokemon.pokemon_id).substr(-3)}}.png"></td><td data-order="{{pokemon.pokemon_id}}">{{pokemon.pokemon_id}}</td><td>{{pokemon.name}}</td><td data-order="{{pokemon.level}}">{{pokemon.level | number}}</td><td data-order="{{pokemon.score}}">{{pokemon.score | number}}</td><td data-order="{{pokemon.iv|number}}">IV: {{ pokemon.iv | number:0 }}%</td><td data-order="{{pokemon.cp}}">CP: {{ pokemon.cp | number}}</td><td data-order="{{pokemon.max_evolve_cp}}">CP: {{pokemon.max_evolve_cp | number}}</td><td data-order="{{pokemon.candy}}">Candy: {{pokemon.candy | number}}</td><td data-order="{{pokemon.candy_needed_to_max_evolve}}">Candy: {{pokemon.candy_needed_to_max_evolve | number}}</td><td data-order="{{pokemon.dust_needed_to_max_evolve}}">Dust: {{pokemon.dust_needed_to_max_evolve | number}}</td><td data-order="{{pokemon.power_up_result}}">CP: {{pokemon.power_up_result | number}}</td><td data-order="{{pokemon.stamina}}">Stamina: {{pokemon.stamina | number}}</td><td data-order="{{pokemon.individual_attack}}">Att IV: {{pokemon.individual_attack}}</td><td data-order="{{pokemon.individual_stamina}}">Sta IV: {{pokemon.individual_stamina}}</td><td data-order="{{pokemon.individual_defense}}">Def IV: {{pokemon.individual_defense}}</td><td>{{user.attacks[pokemon.move_1]}}</td><td>{{user.attacks[pokemon.move_2]}}</td><td><a ng-click="transfer(user.username,pokemon.id)">Transfer</a></td></tr></tbody></table></div></div><pre class="m-t-16">{{user | json}}</pre></md-content>');
}]);
})();

(function(module) {
try {
  module = angular.module('poketrainer.Module.Templates');
} catch (e) {
  module = angular.module('poketrainer.Module.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('states/inventory/inventory.tpl.html',
    '<md-content class="md-padding"><div class="page-header"><h1>Inventory <small>({{ inventory.length }})</small></h1></div><md-progress-circular ng-if="isLoading" md-mode="indeterminate"></md-progress-circular><pre>{{inventory | json}}</pre></md-content>');
}]);
})();
