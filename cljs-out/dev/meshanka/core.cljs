(ns ^:figwheel-hooks meshanka.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [meshanka.pages.conjugator :as conjugator]))

(defn multiply [a b] (* a b))

(def db {})

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom db))

(defn get-app-element []
  (gdom/getElement "app"))

(defn hello-world []
  ;; [:div
  ;;  [:h1 (:text @app-state)]
  ;;  [:h3 "Ta edit ti in src/meshanka/frontend.cljs and watch it change!"]]
[conjugator/page]
  )

(defn mount [el]
  (rdom/render [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
