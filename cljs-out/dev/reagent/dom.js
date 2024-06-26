// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__11302 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11303 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11303);

try{var G__11304 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__11305 = container;
var G__11306 = (function (){
var _STAR_always_update_STAR__orig_val__11307 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11308 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11308);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11307);
}});
return reagent.dom.global$module$react_dom.render(G__11304,G__11305,G__11306);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11302);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__11310 = arguments.length;
switch (G__11310) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__11311 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11311,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11311,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__11315_11331 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__11316_11332 = null;
var count__11317_11333 = (0);
var i__11318_11334 = (0);
while(true){
if((i__11318_11334 < count__11317_11333)){
var vec__11325_11335 = chunk__11316_11332.cljs$core$IIndexed$_nth$arity$2(null,i__11318_11334);
var container_11336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11325_11335,(0),null);
var comp_11337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11325_11335,(1),null);
reagent.dom.re_render_component(comp_11337,container_11336);


var G__11338 = seq__11315_11331;
var G__11339 = chunk__11316_11332;
var G__11340 = count__11317_11333;
var G__11341 = (i__11318_11334 + (1));
seq__11315_11331 = G__11338;
chunk__11316_11332 = G__11339;
count__11317_11333 = G__11340;
i__11318_11334 = G__11341;
continue;
} else {
var temp__5720__auto___11342 = cljs.core.seq(seq__11315_11331);
if(temp__5720__auto___11342){
var seq__11315_11343__$1 = temp__5720__auto___11342;
if(cljs.core.chunked_seq_QMARK_(seq__11315_11343__$1)){
var c__4679__auto___11344 = cljs.core.chunk_first(seq__11315_11343__$1);
var G__11345 = cljs.core.chunk_rest(seq__11315_11343__$1);
var G__11346 = c__4679__auto___11344;
var G__11347 = cljs.core.count(c__4679__auto___11344);
var G__11348 = (0);
seq__11315_11331 = G__11345;
chunk__11316_11332 = G__11346;
count__11317_11333 = G__11347;
i__11318_11334 = G__11348;
continue;
} else {
var vec__11328_11349 = cljs.core.first(seq__11315_11343__$1);
var container_11350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11328_11349,(0),null);
var comp_11351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11328_11349,(1),null);
reagent.dom.re_render_component(comp_11351,container_11350);


var G__11352 = cljs.core.next(seq__11315_11343__$1);
var G__11353 = null;
var G__11354 = (0);
var G__11355 = (0);
seq__11315_11331 = G__11352;
chunk__11316_11332 = G__11353;
count__11317_11333 = G__11354;
i__11318_11334 = G__11355;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
