// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('meshanka.test_runner');
goog.require('cljs.core');
goog.require('meshanka.frontend_test');
goog.require('figwheel.main.testing');
meshanka.test_runner._main = (function meshanka$test_runner$_main(var_args){
var args__4870__auto__ = [];
var len__4864__auto___9275 = arguments.length;
var i__4865__auto___9276 = (0);
while(true){
if((i__4865__auto___9276 < len__4864__auto___9275)){
args__4870__auto__.push((arguments[i__4865__auto___9276]));

var G__9277 = (i__4865__auto___9276 + (1));
i__4865__auto___9276 = G__9277;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return meshanka.test_runner._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(meshanka.test_runner._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.main.testing.system_exit_on_fail.call(null);

var reporter__5162__auto___9278 = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.call(null));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),null], null), null).call(null,reporter__5162__auto___9278))){
} else {
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reporter__5162__auto___9278,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m__5163__auto__){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m__5163__auto__);
}));
}

cljs.test.run_block.call(null,(function (){var env9273 = cljs.test.empty_env.call(null);
var summary9274 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env9273);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meshanka.frontend-test","meshanka.frontend-test",-1373013927,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9045__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__9045__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return meshanka.frontend_test.multiply_test;},new cljs.core.Symbol("meshanka.frontend-test","multiply-test","meshanka.frontend-test/multiply-test",-1628644321,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"meshanka.frontend-test","meshanka.frontend-test",-1373013927,null),new cljs.core.Symbol(null,"multiply-test","multiply-test",373518316,null),"/Users/megatron/Documents/clojure-land/meshanka.frontend/test/meshanka/frontend_test.cljs",23,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(meshanka.frontend_test.multiply_test)?meshanka.frontend_test.multiply_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return meshanka.frontend_test.multiply_test_2;},new cljs.core.Symbol("meshanka.frontend-test","multiply-test-2","meshanka.frontend-test/multiply-test-2",-179757527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"meshanka.frontend-test","meshanka.frontend-test",-1373013927,null),new cljs.core.Symbol(null,"multiply-test-2","multiply-test-2",2128120474,null),"/Users/megatron/Documents/clojure-land/meshanka.frontend/test/meshanka/frontend_test.cljs",25,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(meshanka.frontend_test.multiply_test_2)?meshanka.frontend_test.multiply_test_2.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__9045__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meshanka.frontend-test","meshanka.frontend-test",-1373013927,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary9274,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary9274),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env9273);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary9274));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary9274),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.main.async-result","wait","figwheel.main.async-result/wait",-1374826133),(5000)], null);
}));

(meshanka.test_runner._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(meshanka.test_runner._main.cljs$lang$applyTo = (function (seq9272){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9272));
}));


//# sourceMappingURL=test_runner.js.map
