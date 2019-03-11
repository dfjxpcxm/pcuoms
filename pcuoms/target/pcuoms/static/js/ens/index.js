;(function ($, window, document, undefined) {
    var Carousel = function (elem, options) {
      this.defaults = {curDisplay: 0, autoPlay: false, interval: 3000};
      this.opts = $.extend({}, this.defaults, options);

      var self = this;
      this.$carousel = elem;


			this.$item = this.$carousel.find(".carousel-item");

			// this.$aImg = this.$carousel.find('img');
			this.$aImg = this.$carousel.find(".carousel-item");

      this.imgLen = this.$aImg.length;
      this.curDisplay = this.opts.curDisplay;
      this.autoPlay = this.opts.autoPlay;
      this.viewWidth = $(window).width() / 2;
      this.b_switch = true;
      this.iNow = this.opts.curDisplay;
      this.timer = null;
      this.interval = this.opts.interval;
    };

    Carousel.prototype = {
      play: function () {
        if (this.autoPlay) {
          if (this.iNow === this.imgLen - 1) {
            this.iNow = 0;
          } else {
            this.iNow ++;
          }

          this.movingNext(this.iNow);
        }
      },

      movingPrev: function (index) {
        this.curDisplay = index;

        this.initalCarousel();
      },

      movingNext: function (index) {
        this.curDisplay = index;

        this.initalCarousel();
      },

      initalCarousel: function () {

      	var leftCoord = [
      		["-450px", "0"],
					["-390px", "-30px"],
					["-300px", "-60px"],
					["-280px", "-70px"]
				].reverse();
				var leftWidth = [400, 500, 600,700].reverse();

				var rightCoord = [
					["80px", "-70px"],
					["120px", "-60px"],
					["320px", "-30px"],
					["490px", "0"]
				];
				var rightWidth = [700,600, 500, 400];

        var self = this;
        var half_imgLen = Math.floor(this.imgLen / 2);
        var leftNum, rightNum;
        for (var i = 0; i < half_imgLen; i++) {
          leftNum = this.curDisplay - i - 1;
          this.$aImg.eq(leftNum).css({
            // transform: 'translateX('+(-150 * (i + 1))+'px) translateZ('+(200 - i * 100)+'px) rotateY(30deg)'

						"z-index":  half_imgLen - i,
						"opacity": (half_imgLen - i) * 0.2,
						transform: 'translate(' + leftCoord[i][0] + ',' + leftCoord[i][1] + ')',
						width: leftWidth[i] + 'px'

						// left: leftArr[i] + 'px',
						// transform: 'translateX('+(-150 * (i + 1))+'px) translateZ(0px) rotateY(30deg)',
						// width: widthArr[i] +'px'
          });

          rightNum = this.curDisplay + i + 1;
          if (rightNum > this.imgLen - 1) rightNum -= this.imgLen;
          this.$aImg.eq(rightNum).css({
            // transform: 'translateX('+(150 * (i + 1))+'px) translateZ('+(200 - i * 100)+'px) rotateY(-30deg)'

						"z-index":  half_imgLen - i,
						"opacity": (half_imgLen - i) * 0.2,
						transform: 'translate(' + rightCoord[i][0] + ',' + rightCoord[i][1] + ')',
						width: rightWidth[i] + 'px'
          });

          this.$aImg.removeClass('on');
        }
        $('#carouselTitle')[0].innerText =this.$aImg.eq(this.curDisplay)[0].getAttribute('data-name');
        $('.nav-tag-li').removeClass('li-active')
        $('.nav-tag-li').eq(this.curDisplay).addClass('li-active');
        this.$aImg.eq(this.curDisplay).css({
          // transform: 'translateZ(300px)'

					"z-index": "1000",
					"width": "800px",
					"opacity": 1,
					"transform": "translate(-23%, -23%)"
        }).addClass('on');

        this.$carousel.on('webkitTransitionEnd', function () {
          self.b_switch = true;
        });
      },

      inital: function () {
        var self = this;
        this.initalCarousel();

        this.$aImg.on('click', function (ev) {
          if (self.b_switch && !$(this).hasClass('on')) {
            self.iNow = $(this).index();
            self.b_switch = false;

            var direction = self.viewWidth < ev.clientX ? 'next' : 'prev';
            var index = $(this).index();

            if (direction === 'next') {
              self.movingNext(index);
            } else {
              self.movingPrev(index);
            }
          }
					// 如果点击当前页面, 跳走
					else {
						var key  = $('.nav-tag-li.li-active').data("key");
//						location.href = '/' + key + '.html';
						location.href = '' + key;
					}
        }).hover(function () {
          clearInterval(self.timer);
        }, function () {
          self.timer = setInterval(function () {
            self.play();
          }, self.interval);
        });

        this.timer = setInterval(function () {
          self.play();
        }, this.interval);

        this.$carousel.on('selectstart', function () {
          return false;
        });
      },

      constructor: Carousel
    };

    $.fn.carousel = function (options) {
      var carousel = new Carousel(this, options);
      $.fn.carouselObj = carousel;
      return carousel.inital();
    };

  })(jQuery, window, document, undefined);
