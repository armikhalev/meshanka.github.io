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
var _STAR_always_update_STAR__orig_val__11222 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11223 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11223);

try{var G__11224 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__11225 = container;
var G__11226 = (function (){
var _STAR_always_update_STAR__orig_val__11227 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11228 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11228);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11227);
}});
return reagent.dom.global$module$react_dom.render(G__11224,G__11225,G__11226);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11222);
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
var G__11230 = arguments.length;
switch (G__11230) {
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

var vec__11231 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11231,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11231,(1),null);
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

var seq__11235_11251 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__11236_11252 = null;
var count__11237_11253 = (0);
var i__11238_11254 = (0);
while(true){
if((i__11238_11254 < count__11237_11253)){
var vec__11245_11255 = chunk__11236_11252.cljs$core$IIndexed$_nth$arity$2(null,i__11238_11254);
var container_11256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11245_11255,(0),null);
var comp_11257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11245_11255,(1),null);
reagent.dom.re_render_component(comp_11257,container_11256);


var G__11258 = seq__11235_11251;
var G__11259 = chunk__11236_11252;
var G__11260 = count__11237_11253;
var G__11261 = (i__11238_11254 + (1));
seq__11235_11251 = G__11258;
chunk__11236_11252 = G__11259;
count__11237_11253 = G__11260;
i__11238_11254 = G__11261;
continue;
} else {
var temp__5720__auto___11262 = cljs.core.seq(seq__11235_11251);
if(temp__5720__auto___11262){
var seq__11235_11263__$1 = temp__5720__auto___11262;
if(cljs.core.chunked_seq_QMARK_(seq__11235_11263__$1)){
var c__4679__auto___11264 = cljs.core.chunk_first(seq__11235_11263__$1);
var G__11265 = cljs.core.chunk_rest(seq__11235_11263__$1);
var G__11266 = c__4679__auto___11264;
var G__11267 = cljs.core.count(c__4679__auto___11264);
var G__11268 = (0);
seq__11235_11251 = G__11265;
chunk__11236_11252 = G__11266;
count__11237_11253 = G__11267;
i__11238_11254 = G__11268;
continue;
} else {
var vec__11248_11269 = cljs.core.first(seq__11235_11263__$1);
var container_11270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11248_11269,(0),null);
var comp_11271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11248_11269,(1),null);
reagent.dom.re_render_component(comp_11271,container_11270);


var G__11272 = cljs.core.next(seq__11235_11263__$1);
var G__11273 = null;
var G__11274 = (0);
var G__11275 = (0);
seq__11235_11251 = G__11272;
chunk__11236_11252 = G__11273;
count__11237_11253 = G__11274;
i__11238_11254 = G__11275;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
