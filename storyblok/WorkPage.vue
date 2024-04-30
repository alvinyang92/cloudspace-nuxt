<template>
  <!-- <pre>{{ blok }}</pre> -->
  <!-- info -->
  <div v-editable="blok" class="bg-reka-blue !text-white relative">

    <!-- top -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-10 pb-5 sm:pb-10 md:py-16">
      <div class="flex flex-col md:flex-row md:items-start md:justify-between md:divide-x md:divide-gray-200/10">
        <!-- title | category -->
        <div class="md:w-[50%] w-full ">
          <h1 class="text-4xl font-bold sm:text-6xl text-reka-purple"> {{ blok.title }}</h1>
          <!-- <p v-for="item in blok.category" :key="item[0]" class="mt-3 md:mt-5 font-bold "> {{ item.name }}</p> -->
        </div>


        <div class="md:w-[50%] w-full px-0 md:px-10">
          <!-- <p class="leading-8">{{ blok.desc }}</p> -->
          <article v-html="resolvedRichTextDesc" class="mt-5 md:mt-0 prose max-w-none text-white"></article>


          <!-- client -->
          <div v-if="blok.client" class="mt-6 flex flex-col md:flex-row md:items-center">
            <span class="font-bold md:w-[100px]">Client</span>
            <p class="leading-8">{{ blok.client }}</p>
          </div>

          <!-- agency -->
          <div v-if="blok.agency" class="mt-4 flex flex-col md:flex-row md:items-center">
            <span class="font-bold md:w-[100px]">Agency</span>
            <p class="leading-8">{{ blok.agency }}</p>
          </div>

          <!-- audio -->
          <div v-if="blok.audio" class="mt-4 flex flex-col md:flex-row md:items-center">
            <span class="font-bold md:w-[100px]">Audio</span>
            <p class="leading-8">{{ blok.audio }}</p>
          </div>
        </div>

      </div>
    </div>

    <!-- portfolio banner -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-5 md:py-16 ">
      <nuxt-link class="iframe-lightbox-link" :to="`https://www.youtube.com/embed/${blok.link}?autoplay`" data-padding-bottom="56.25%">
        <div class="relative isolate overflow-hidden text-center shadow-2xl rounded-3xl ">
          <div class="relative md:h-[700px] h-[300px] w-full ">
            <div class="absolute inset-0 z-30 bg-black/40 md:h-[700px] h-[300px] w-full"></div>
            <div class="absolute inset-0 z-50 w-full flex items-center justify-center">
              <div class="flex flex-col gap-3">
                <!-- playbutton -->
                <nuxt-img class="w-[80px] h-[80px] " src="https://a.storyblok.com/f/239503/48x48/af1e02308d/play-circle.svg" />
                <!-- play text -->
                <p class="text-white font-medium text-lg">Play Video</p>
              </div>
            </div>
            <nuxt-img v-if="blok.featured_image?.filename" class="w-full h-full object-cover" :src="blok.featured_image.filename + '/m/'" :alt="blok.featured_image.alt" />
          </div>
        </div>
      </nuxt-link>
    </div>

    <!-- iframe sporify -->
    <div v-if="blok.showspotify" class="mx-auto max-w-7xl px-6 lg:px-8 py-5 md:py-16 iframe">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7uFyPwugJeUeHmLEgB9jSf?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>

    <div class="mx-auto max-w-6xl px-3 lg:px-8 pt-5 pb-10">
      <h3 class="mt-3 sm:mt-0 font-semibold text-xl sm:text-3xl text-center text-reka-purple">{{ blok.featured_title }}</h3>


      <!-- content -->
      <div class="mt-5  divide-y divide-white/10">
        <StoryblokComponent v-for="blok in blok.content" :key="blok._uid" :blok="blok" />
      </div>

    </div>

    <!-- testimonial -->
    <section v-if="blok.company" class="mx-auto max-w-5xl px-6 lg:px-8 pb-24">
      <div class="bg-reka-purple py-10 px-4 lg:px-0 rounded-3xl">
        <h3 class="mt-2 text-2xl font-bold text-black text-center">What Our Client Said</h3>
        <div class="mt-5 mx-auto max-w-2xl lg:max-w-4xl">
          <!-- <img class="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> -->
          <figure class="">
            <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <article v-html="resolvedRichText" class="prose max-w-none"></article>
            </blockquote>

            <figcaption class="mt-10">
              <div class="mt-4 flex flex-col sm:flex-row text-center items-center justify-center space-x-0 sm:space-x-3 text-base">
                <div class="font-semibold text-gray-900">{{ blok.name }}</div>
                <!-- dot -->
                <div v-if="blok.name">
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="hidden sm:block fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                </div>
                <div class="text-gray-600">{{ blok.position }}</div>
                <!-- dot -->
                <div v-if="blok.position">
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="hidden sm:block fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                </div>
                <div class="text-gray-600">{{ blok.company }}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>





    <StoryblokComponent v-for="blok in blok.footer" :key="blok._uid" :blok="blok" />


  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import moment from 'moment';
const props = defineProps({ blok: Object, raw: Object, })
const resolvedRichText = computed(() => renderRichText(props.blok.richtext))
const resolvedRichTextDesc = computed(() => renderRichText(props.blok.desc))


const showHamburger = ref(false);


const article_post = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'work',
  is_startpage: false,
  filter_query: {
    title: {
      not_in: props.blok.title
    },
    category: {
      any_in_array: props.blok.category[0].uuid
    }
  }
})

article_post.value = data.stories



const handleScroll = () => {
  if (window.scrollY > 1000) { // Adjust the offset as needed
    showHamburger.value = true;
  } else {
    showHamburger.value = false;
  }
};

onMounted(() => {

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  // ... other initialization code

  /*!
* modified Simple lightbox effect in pure JS
* @see {@link https://github.com/squeral/lightbox}
* @see {@link https://github.com/squeral/lightbox/blob/master/lightbox.js}
* @params {Object} elem Node element
* @params {Object} [rate] debounce rate, default 500ms
* new IframeLightbox(elem)
* passes jshint
*/
  (function (root, document) {
    "use strict";
    var docBody = document.body || "";

    var appendChild = "appendChild";
    var classList = "classList";
    var createElement = "createElement";
    var dataset = "dataset";
    var getAttribute = "getAttribute";
    var getElementById = "getElementById";
    var getElementsByClassName = "getElementsByClassName";
    var _addEventListener = "addEventListener";

    var containerClass = "iframe-lightbox";
    var iframeLightboxOpenClass = "iframe-lightbox--open";
    var iframeLightboxLinkIsBindedClass = "iframe-lightbox-link--is-binded";

    var isLoadedClass = "is-loaded";
    var isOpenedClass = "is-opened";
    var isShowingClass = "is-showing";

    var IframeLightbox = function (elem, settings) {
      var options = settings || {};
      this.trigger = elem;
      this.el = document[getElementsByClassName](containerClass)[0] || "";
      this.body = this.el ? this.el[getElementsByClassName]("body")[0] : "";
      this.content = this.el ? this.el[getElementsByClassName]("content")[0] : "";
      this.src = elem[dataset].src || "";
      this.href = elem[getAttribute]("href") || "";
      this.dataPaddingBottom = elem[dataset].paddingBottom || "";
      this.dataScrolling = elem[dataset].scrolling || "";
      this.rate = options.rate || 500;
      this.scrolling = options.scrolling;
      /*!
       * Event handlers
       */
      this.onOpened = options.onOpened;
      this.onIframeLoaded = options.onIframeLoaded;
      this.onLoaded = options.onLoaded;
      this.onCreated = options.onCreated;
      this.onClosed = options.onClosed;
      this.init();
    };
    IframeLightbox.prototype.init = function () {
      var _this = this;
      if (!this.el) {
        this.create();
      }
      var debounce = function (func, wait) {
        var timeout,
          args,
          context,
          timestamp;
        return function () {
          context = this;
          args = [].slice.call(arguments, 0);
          timestamp = new Date();
          var later = function () {
            var last = (new Date()) - timestamp;
            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              func.apply(context, args);
            }
          };
          if (!timeout) {
            timeout = setTimeout(later, wait);
          }
        };
      };
      var logic = function () {
        _this.open();
      };
      if (!this.trigger[classList].contains(iframeLightboxLinkIsBindedClass)) {
        this.trigger[classList].add(iframeLightboxLinkIsBindedClass);
        this.trigger[_addEventListener]("click", function (e) {
          e.stopPropagation();
          e.preventDefault();
          debounce(logic, this.rate).call();
        });
      }
    };
    IframeLightbox.prototype.create = function () {
      var _this = this,
        bd = document[createElement]("div");
      this.el = document[createElement]("div");
      this.content = document[createElement]("div");
      this.body = document[createElement]("div");
      this.el[classList].add(containerClass);
      bd[classList].add("backdrop");
      this.content[classList].add("content");
      this.body[classList].add("body");
      this.el[appendChild](bd);
      this.content[appendChild](this.body);
      this.contentHolder = document[createElement]("div");
      this.contentHolder[classList].add("content-holder");
      this.contentHolder[appendChild](this.content);
      this.el[appendChild](this.contentHolder);
      this.btnClose = document[createElement]("a");
      this.btnClose[classList].add("btn-close");
      /* jshint -W107 */
      this.btnClose.setAttribute("href", "javascript:void(0);");
      /* jshint +W107 */
      this.el[appendChild](this.btnClose);
      docBody[appendChild](this.el);
      bd[_addEventListener]("click", function () {
        _this.close();
      });
      this.btnClose[_addEventListener]("click", function () {
        _this.close();
      });
      root[_addEventListener]("keyup", function (ev) {
        if (27 === (ev.which || ev.keyCode)) {
          _this.close();
        }
      });
      var clearBody = function () {
        if (_this.isOpen()) {
          return;
        }
        _this.el[classList].remove(isShowingClass);
        _this.body.innerHTML = "";
      };
      this.el[_addEventListener]("transitionend", clearBody, false);
      this.el[_addEventListener]("webkitTransitionEnd", clearBody, false);
      this.el[_addEventListener]("mozTransitionEnd", clearBody, false);
      this.el[_addEventListener]("msTransitionEnd", clearBody, false);
      this.callCallback(this.onCreated, this);
    };
    IframeLightbox.prototype.loadIframe = function () {
      var _this = this;
      this.iframeId = containerClass + Date.now();
      this.iframeSrc = this.src || this.href || "";
      /*!
       * @see {@link https://stackoverflow.com/questions/18648203/how-remove-horizontal-scroll-bar-for-iframe-on-google-chrome}
       */
      var iframeHTML = [];
      iframeHTML.push('<iframe src="' + this.iframeSrc + '" name="' + this.iframeId + '" id="' + this.iframeId + '" onload="this.style.opacity=1;" style="opacity:0;border:none;" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" height="166" frameborder="no"></iframe>');
      /*!
       * @see {@link https://epic-spinners.epicmax.co/}
       */
      /*iframeHTML.push('<div class="spring-spinner"><div class="spring-spinner-part top"><div class="spring-spinner-rotator"></div></div><div class="spring-spinner-part bottom"><div class="spring-spinner-rotator"></div></div></div>');*/
      iframeHTML.push('<div class="half-circle-spinner"><div class="circle circle-1"></div><div class="circle circle-2"></div></div>');
      this.body.innerHTML = iframeHTML.join("");
      (function (iframeId, body) {
        var iframe = document[getElementById](iframeId);
        iframe.onload = function () {
          /* console.log("loaded iframe:", this.iframeSrc); */
          this.style.opacity = 1;
          body[classList].add(isLoadedClass);
          if (_this.scrolling || _this.dataScrolling) {
            iframe.removeAttribute("scrolling");
            iframe.style.overflow = "scroll";
          } else {
            iframe.setAttribute("scrolling", "no");
            iframe.style.overflow = "hidden";
          }
          _this.callCallback(_this.onIframeLoaded, _this);
          _this.callCallback(_this.onLoaded, _this);
        };
      })(this.iframeId, this.body);
    };
    IframeLightbox.prototype.open = function () {
      this.loadIframe();
      if (this.dataPaddingBottom) {
        this.content.style.paddingBottom = this.dataPaddingBottom;
      } else {
        this.content.removeAttribute("style");
      }
      this.el[classList].add(isShowingClass);
      this.el[classList].add(isOpenedClass);
      docBody[classList].add(iframeLightboxOpenClass);
      this.callCallback(this.onOpened, this);
    };
    IframeLightbox.prototype.close = function () {
      this.el[classList].remove(isOpenedClass);
      this.body[classList].remove(isLoadedClass);
      docBody[classList].remove(iframeLightboxOpenClass);
      this.callCallback(this.onClosed, this);
    };
    IframeLightbox.prototype.isOpen = function () {
      return this.el[classList].contains(isOpenedClass);
    };
    IframeLightbox.prototype.callCallback = function (func, data) {
      if (typeof func !== "function") {
        return;
      }
      var caller = func.bind(this);
      caller(data);
    };
    root.IframeLightbox = IframeLightbox;
  })("undefined" !== typeof window ? window : this, document);


  (function (root, document) {
    "use strict";
    [].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function (el) {
      el.lightbox = new IframeLightbox(el, {
        onCreated: function () {
          /* show your preloader */
        },
        onLoaded: function () {
          /* hide your preloader */
        },
        onError: function () {
          /* hide your preloader */
        },
        onClosed: function () {
          /* hide your preloader */
        },
        scrolling: false,
        /* default: false */
        rate: 500 /* default: 500 */
      });
    });
  })("undefined" !== typeof window ? window : this, document);



})


</script>
