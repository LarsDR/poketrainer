(function(module) {
try {
  module = angular.module('poketrainer.Module.Templates');
} catch (e) {
  module = angular.module('poketrainer.Module.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('states/abstracts/header.tpl.html',
    '<md-toolbar layout="row"><div class="md-toolbar-tools"><h2><span>PokéTrainer</span></h2><span flex=""></span><md-button ui-sref="public.users()" class="md-raised" aria-label="Bots">Bots Overview</md-button></div></md-toolbar>');
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
  $templateCache.put('states/inventory/inventory.tpl.html',
    '<md-content class="md-padding"><div class="page-header"><h1>Inventory <small>({{ inventory.length }})</small></h1></div><md-progress-circular ng-if="isLoading" md-mode="indeterminate"></md-progress-circular><pre>{{inventory | json}}</pre></md-content>');
}]);
})();

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
  $templateCache.put('states/status/status.tpl.html',
    '<md-content class="md-padding" style="position:relative;height:100%;width:100%;"><ui-gmap-google-map center="map.center" zoom="map.zoom" options="map.options"><ui-gmap-marker coords="marker.coords" options="marker.options" events="marker.events" idkey="marker.id"></ui-gmap-marker></ui-gmap-google-map><div class="row m-t-16"><div class="col-md-3 text-center"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Level {{ playerStats.level }}, XP:<br>{{ (playerStats.experience - playerStats.prev_level_xp) | number }}/{{ (playerStats.next_level_xp - playerStats.prev_level_xp) | number }}</h3></div><div class="panel-body"><span class="chart" easypiechart="" percent="playerStats.xpPercent" options="expLvlOptions"><span class="percent" ng-bind="playerStats.xpPercent"></span></span></div></div></div><div class="col-md-3 text-center"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Unique Pokemon:<br>{{ playerStats.unique_pokedex_entries }}/151</h3></div><div class="panel-body"><span class="chart" easypiechart="" percent="playerStats.uniquePokedexPercent" options="uniquePokedexOptions"><span class="percent" ng-bind="playerStats.uniquePokedexPercent"></span></span></div></div></div><div class="col-md-3 text-center"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Pokemon Bag:<br>{{ pokemon.length }}/{{ player.max_pokemon_storage }}</h3></div><div class="panel-body"><span class="chart" easypiechart="" percent="playerStats.pokemonInvPercent" options="pokemonInvOptions"><span class="percent" ng-bind="playerStats.pokemonInvPercent"></span></span></div></div></div><div class="col-md-3 text-center"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Item Bag:<br>{{ inventory.item_count }}/{{ player.max_item_storage }}</h3></div><div class="panel-body"><span class="chart" easypiechart="" percent="playerStats.itemsInvPercent" options="itemsInvOptions"><span class="percent" ng-bind="playerStats.itemsInvPercent"></span></span></div></div></div></div><div class="row m-t-16 navbar-fixed-bottom" style="margin: 0 16px 16px 16px;"><div class="col-md-3 text-left"><button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#pokemonModal">Pokemon</button></div><div class="col-md-6 text-center"><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#debugModal">Show debug</button></div><div class="col-md-3 text-right"><button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#inventoryModal">Inventory</button></div></div><div class="modal fade" id="pokemonModal" tabindex="-1" role="dialog"><div class="modal-dialog modal-xl" role="document" style="max-width: 98%; width: 98%;"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Pokemon</h4></div><div class="modal-body"><div class="row"><div class="col-md-12"><table datatable="ng" class="row-border hover"><thead><th>Recent</th><th>#</th><th>Name</th><th>Lvl</th><th>Score</th><th>IV</th><th>CP</th><th>Max CP</th><th>Candies</th><th>Candy Needed</th><th>Dust Needed</th><th>Power Up</th><th>Stamina</th><th>Att IV</th><th>Sta IV</th><th>Def IV</th><th>Move 1</th><th>Move 2</th><th>Transfer</th></thead><tbody><tr ng-repeat="pkm in pokemon"><td data-order="{{ pkm.creation_time_ms }}"><md-tooltip md-direction="right">Caught:{{ pkm.creation_time_ms | date : \'medium\' }}</md-tooltip><img style="max-height: 50px;" ng-src="assets/images/pokemon/{{(\'000\' + pkm.pokemon_id).substr(-3)}}.png"></td><td data-order="{{pkm.pokemon_id}}">{{pkm.pokemon_id}}</td><td>{{pkm.name}}</td><td data-order="{{pkm.level}}">{{pkm.level | number}}</td><td data-order="{{pkm.score}}">{{pkm.score | number}}</td><td data-order="{{pkm.iv|number}}">IV: {{ pkm.iv | number:0 }}%</td><td data-order="{{pkm.cp}}">CP: {{ pkm.cp | number}}</td><td data-order="{{pkm.max_evolve_cp}}">CP: {{pkm.max_evolve_cp | number}}</td><td data-order="{{pkm.candy}}">Candy: {{pkm.candy | number}}</td><td data-order="{{pkm.candy_needed_to_max_evolve}}">Candy: {{pkm.candy_needed_to_max_evolve | number}}</td><td data-order="{{pkm.dust_needed_to_max_evolve}}">Dust: {{pkm.dust_needed_to_max_evolve | number}}</td><td data-order="{{pkm.power_up_result}}">CP: {{pkm.power_up_result | number}}</td><td data-order="{{pkm.stamina}}">Stamina: {{pkm.stamina | number}}</td><td data-order="{{pkm.individual_attack}}">Att IV: {{pkm.individual_attack}}</td><td data-order="{{pkm.individual_stamina}}">Sta IV: {{pkm.individual_stamina}}</td><td data-order="{{pkm.individual_defense}}">Def IV: {{pkm.individual_defense}}</td><td>{{attacks[pkm.move_1]}}</td><td>{{attacks[pkm.move_2]}}</td><td><a ng-click="transfer(player.username,pkm.id)">Transfer</a></td></tr></tbody></table></div></div></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><div class="modal fade" id="inventoryModal" tabindex="-1" role="dialog"><div class="modal-dialog modal-lg" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Inventory</h4></div><div class="modal-body"><div class="row m-b-10"><div class="col-md-3"><div class="p-l-10 p-r-10 text-center"><img class="img-responsive" style="max-height: 100px;margin: 0 auto;" ng-src="assets/images/items/1.png"><h4>Poke Ball</h4><h4>{{inventory.poke_balls}}</h4></div></div><div class="col-md-3"><div class="p-l-10 p-r-10 text-center"><img class="img-responsive" style="max-height: 100px;margin: 0 auto;" ng-src="assets/images/items/2.png"><h4>Great Ball</h4><h4>{{inventory.great_balls}}</h4></div></div><div class="col-md-3"><div class="p-l-10 p-r-10 text-center"><img class="img-responsive" style="max-height: 100px;margin: 0 auto;" ng-src="assets/images/items/3.png"><h4>Ultra Ball</h4><h4>{{inventory.ultra_balls}}</h4></div></div><div class="col-md-3"><div class="p-l-10 p-r-10 text-center"><img class="img-responsive" style="max-height: 100px;margin: 0 auto;" ng-src="assets/images/items/4.png"><h4>Master Ball</h4><h4>{{inventory.master_balls}}</h4></div></div></div><div class="row m-b-10"><div class="col-md-3"><div class="p-l-10 p-r-10 text-center"><img class="img-responsive" style="max-height: 100px;margin: 0 auto;" ng-src="assets/images/items/101.png"><h4>Potion</h4><h4>{{inventory.potion}}</h4></div></div><div class="col-md-3"><div class="p-l-10 p-r-10 text-center"><img class="img-responsive" style="max-height: 100px;margin: 0 auto;" ng-src="assets/images/items/102.png"><h4>Super Potion</h4><h4>{{inventory.super_potion}}</h4></div></div><div class="col-md-3"><div class="p-l-10 p-r-10 text-center"><img class="img-responsive" style="max-height: 100px;margin: 0 auto;" ng-src="assets/images/items/103.png"><h4>Hyper Potion</h4><h4>{{inventory.hyper_potion}}</h4></div></div><div class="col-md-3"><div class="p-l-10 p-r-10 text-center"><img class="img-responsive" style="max-height: 100px;margin: 0 auto;" ng-src="assets/images/items/104.png"><h4>Max Potion</h4><h4>{{inventory.max_potion}}</h4></div></div></div><div class="row m-b-10"><div class="col-md-3"><div class="p-l-10 p-r-10 text-center"><img class="img-responsive" style="max-height: 100px;margin: 0 auto;" ng-src="assets/images/items/201.png"><h4>Revive</h4><h4>{{inventory.revive}}</h4></div></div><div class="col-md-3"><div class="p-l-10 p-r-10 text-center"><img class="img-responsive" style="max-height: 100px;margin: 0 auto;" ng-src="assets/images/items/202.png"><h4>Max Revive</h4><h4>{{inventory.max_revive}}</h4></div></div><div class="col-md-3"><div class="p-l-10 p-r-10 text-center"><img class="img-responsive" style="max-height: 100px;margin: 0 auto;" ng-src="assets/images/items/301.png"><h4>Lucky Egg</h4><h4>{{inventory.lucky_eggs}}</h4></div></div><div class="col-md-3"><div class="p-l-10 p-r-10 text-center"><img class="img-responsive" style="max-height: 100px;margin: 0 auto;" ng-src="assets/images/items/701.png"><h4>Razz Berries</h4><h4>{{inventory.razz_berries}}</h4></div></div></div></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><div class="modal fade" id="debugModal" tabindex="-1" role="dialog"><div class="modal-dialog modal-xl" role="document" style="max-width: 98%; width: 98%;"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Debug</h4></div><div class="modal-body"><div class="row"><div class="col-md-12"><h4>Player:</h4><pre class="m-t-16">{{player | json}}</pre><h4>Player:</h4><pre class="m-t-16">{{playerStats | json}}</pre><h4>Player Stats:</h4><pre class="m-t-16">{{playerStats | json}}</pre><h4>Inventory:</h4><pre class="m-t-16">{{inventory | json}}</pre><h4>Pokemon:</h4><pre class="m-t-16">{{pokemon | json}}</pre><h4>Attacks:</h4><pre class="m-t-16">{{attacks | json}}</pre></div></div></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div></md-content>');
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