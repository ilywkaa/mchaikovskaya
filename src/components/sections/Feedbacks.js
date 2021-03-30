import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Feedbacks = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) =>

{

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Отзывы моих учеников'
  };

  return  (
    <div className="container section">
      <div className={innerClasses}>
      <SectionHeader data={sectionHeader} className="center-content pt-24" />
      
      <Carousel itemsToShow={1} enableAutoPlay={true} autoPlaySpeed={6000}>  
      {/* //TODO: OnNextEnd periodic carousel rotation */}
        <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16 center-content">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content justify-content">
                  <p className="m-0 text-xxs">
                  Рита, спасибо тебе огромное за уверенность. 
                  Благодаря нашим занятиям я наконец-то смогла почувствовать, что могу уверенно говорить на английском, 
                  смотреть фильмы и читать! Мне нравится, что твои занятия -это всегда больше, чем просто выучить набор слов и 
                  очередное грамматическое правило. Это возможность обсудить такие темы, до которых бы точно не добралась в привычной рутине. 
                  И все это упаковано и подано в интересном формате: игры, интервью, ролики, песни, квизлеты. Я точно буду продолжать занятия, 
                  потому что вижу результат.
                  </p>
                    <p className="mb mr-8 right-content">Наталья Ч.</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16 center-content">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content justify-content">
                  <p className="m-0 text-xxs">
                    Я начал учить английский с Ритой в сентябре 2019 года. За это время я прокачался от A1 до B1-B2. До этого я уже сменил 2 преподавателей, пробовал заниматься на образовательных платформах и не понимал структуру и принципы языка. 
                    За время занятий с Ритой я научился говорить на профессиональные темы, подготовил резюме и прошел 2 собеседования на английском языке. Опыт Риты и постоянная обратная связь помогают не тратим время, а восполнять пробелы в знаниях и улучшать навыки. На занятиях мы всегда много смеемся и много говорим.  
                    Огромным плюсом является произношение Риты, которое очень подкупает. Работа с мотивацией ученика 10 из 10, мне действительно стыдно, когда я не делаю ДЗ.
                  </p>
                  <p className="mb mr-8 right-content">Павел А.</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16 center-content">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content justify-content">
                  <p className="m-0 text-xxs">
                    Margarita and I have been studying together for almost 3,5 years, and I should say time flew by incredibly fast! For me, it's like nothing else says how interesting and pleasant it is to deal with a person.
                    My goal has always been to learn and, with every year, improve my level of English for school, communication, and life.
                    Subsequently, it grew into something way bigger­­. This year I'm going to take an international exam and, after finishing school, study abroad. To that aim we are closer and closer with every lesson because of all the skills and knowledge I get.
                    The most valuable thing about our lessons is the connection that appears the moment the camera is on (yes, we meet online, what is another feature that makes these lessons so convenient). When I say connection, I mean that feeling of comfort and understanding that constantly accompanies you, and without that, it's really hard to learn any language.
                      If you were searching for a tutor, that would not only teach you language, but become your friend with whom you can discuss the most diverse topics, share opinions and practice every skill by learning useful, always relevant, and absorbing materials, you're in the right place!
                  </p>
                  <p className="mb mr-8 right-content">Лиза И.</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16 center-content">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content justify-content">
                  <p className="m-0 text-xxs">
                    I have been learning English with Margarita since November, 2019. My aim was to feel more confident in this language and start talking faster. I believe these aims were achieved, but of cause I want to continue my growing. I love how our lessons organize, it's very interesting and productive every time on the lessons. We are watching videos, playing games, talking, reading and having fun every time. Margarita one of the best teacher I've ever had. She is very supportive and kind person.
                  </p>
                  <p className="mb mr-8 right-content">Ульяна</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16 center-content">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content justify-content">
                  <p className="m-0 text-xxs">
                    У Маргариты я занимаюсь примерно с начала 2020 года, сначала в составе группы из 3, а затем — из двух человек. За это время было пройдено 3 курса по 50 часов.
                    Основной целью было повышение уровня владения языком через речевую практику, понимание на слух и систематизация грамматики.
                    К концу этого года можно с уверенностью сказать, что я стал говорить значительно увереннее и с меньшим количеством ошибок. Уровень владения повысился с pre-intermediate до intermediate.
                    При прохождении курсов кроме стандартных форм работы как устных, так и письменных, Маргарита задействует и другие дополнительные средства: онлайн-сервисы, такие как Quizlet, и разные короткие викторины. Материалы, которые используются в курсе (а это не только то, что предлагает учебник) в целом актуальны, и время от времени Маргарита предлагает отойти от курса тем, предлагаемых по учебнику, чтобы обсудить что-то действительно злободневное и актуальное здесь и сейчас (например, новости о пандемии какой-нибудь или локдауне). Примечательный момент — занятия у Маргариты строятся так, чтобы все занимающиеся были вовлечены в активность, будь то речевая практика, чтение или аудирование.
                    Помимо того, что занятия выстроены сбалансированно с методической точки зрения, хочется отметить, что атмосфера и время на занятиях воспринимается не как классический урок, а как приятное и полезное времяпрепровождение, которое отлично дополняет рабочие будни и вносит в них разнообразие.
                  </p>
                  <p className="mb mr-8 right-content">Максим</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16 center-content">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content justify-content">
                  <p className="m-0 text-xxs">
                    А теперь feedback, но на русском, а то я полдня буду формулировать ответы(
                    <p/>
                    <p>
                    1. Занимаемся второй год.
                    </p><p>2. У меня была цель - начать хоть как-то говорить и не бояться этого.
                    </p><p>3. Половина цели готова - я хоть как-то говорю, но все еще боюсь.
                    </p><p>4. Самое ценное - общение и дружеская атмосфера.
                    </p><p>5. Материалы актуальны.
                    </p><p>6. Форма работы мне подходит - и учебник, и обсуждения.
                    </p><p>7. Атмосфера прекрасная!:)
                    </p>
                  </p>
                  <p className="mb mr-8 right-content">Анна</p>
                </div>
              </div>
            </div>

      </Carousel>
      </div>
    </div>
  )
}

Feedbacks.propTypes = propTypes;
Feedbacks.defaultProps = defaultProps;

export default Feedbacks;