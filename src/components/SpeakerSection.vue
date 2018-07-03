<template>
    <div>
        <div class="container">
          <div class="section_title mb50">
              <h3 class="title">
                speakers
              </h3>
          </div>
        </div>
        <div class="row justify-content-center no-gutters">
            <div class="col-md-2 col-sm-6" v-for="(item, index) in speakers" :key="index">
                <div class="speaker_box">
                    <div class="speaker_img">
                        <a v-b-toggle="'collapse' + index"><img :src="item.photoUrl" alt="speaker name"></a>
                        <!-- <a v-if="item.link" :href="item.link" target="_blank"><img :src="item.photoUrl" alt="speaker name"></a> -->
                        <img v-if="!item.link"  :src="item.photoUrl" alt="speaker name">
                        <div class="info_box">
                            <h5 class="name">{{item.name}}</h5>
                            <p class="position">{{item.org}}<span v-if="item.country">, {{item.country}}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="d-block d-sm-none">
                  <b-collapse :id="'collapse' + index" accordion="my-inner-accordion">
                    <ul class="list-group list-group-flush text-justify">
                      <li class="list-group-item" v-if="item.talk.title">
                            <strong>Talk Title</strong>: {{item.talk.title}}
                        </li>
                        <li class="list-group-item" v-if="item.talk.abstract">
                            <strong>Talk Abstract</strong>: {{item.talk.abstract}}
                        </li>
                        <li class="list-group-item" v-if="item.bio">
                            <strong>Biography</strong>: {{item.bio}}
                        </li>
                        <li class="list-group-item" v-if="item.link">
                            <strong>Website</strong>:
                            <a :href="item.link" target="_blank">{{item.link}}</a>
                        </li>
                    </ul>
                  </b-collapse>
                </div>
            </div>
        </div>
        <div class="row p10 d-none d-sm-block">
          <div>
            <!-- element to collapse -->
            <b-collapse :id="'collapse' + index" accordion="my-accordion"  v-for="(item, index) in speakers" :key="index">
                <ul class="list-group list-group-flush text-justify">
                    <li class="list-group-item" v-if="item.talk.title">
                        <strong>Talk Title</strong>: {{item.talk.title}}
                    </li>
                    <li class="list-group-item" v-if="item.talk.abstract">
                        <strong>Talk Abstract</strong>: {{item.talk.abstract}}
                    </li>
                    <li class="list-group-item" v-if="item.bio">
                        <strong>Biography</strong>: {{item.bio}}
                    </li>
                    <li class="list-group-item" v-if="item.link">
                        <strong>Website</strong>:
                        <a :href="item.link" target="_blank">{{item.link}}</a>
                    </li>
                </ul>
            </b-collapse>
          </div>
        </div>
    </div>
</template>

<script>
import DataUtil from '@/utils/DataUtil'
export default {
  name: 'SpeakerSection',
  data () {
    return {
      speakers: [
        {
          name: 'Ido Dagan',
          org: 'Bar Ilan University',
          photoUrl: '/static/img/speakers/ido-dagan-min.png',
          link: 'http://u.cs.biu.ac.il/~dagan/',
          country: 'Israel',
          talk: {
            title: `Consolidating Textual Information`,
            abstract: `How can we capture effectively the information expressed in multiple texts? How can we allow people, as well as computer applications, to easily explore it? The current semantic NLP pipeline typically ends at the single sentence or text level, putting the burden on applications to consolidate related information across different texts. Further, semantic representations, which may provide the basis for text consolidation, are often based on non-trivial pre-specified schemata, which require expert annotation and hence complicate the creation of large scale corpora for training. In this talk, I will outline a research program, titled Natural Knowledge, whose goals are to represent the consolidated information conveyed in multiple texts and to communicate it effectively to users. This program consists of three novel research lines. First, we aim to establish a “natural” semantic representation for individual texts, which is based solely on crowdsourcable natural language expressions rather than on pre-specified schemata. To that end, we follow and extend the recent Question-Answer Semantic Role Labeling (QA-SRL) approach, through which we decompose sentence information to minimal question-answer pairs, each representing an “atomic” statement. Second, we are developing  principles for consolidating the information structures of different texts, requiring substantial extension of the expressiveness and performance of cross-text co-reference detection. This yields a consolidated structure that bears similarities to traditional knowledge graphs, where representations correspond to real-world elements and statements relating them. Third, we are developing a framework for interactive exploration of the consolidated content, including methodologies for evaluating interactive presentation of information. In the talk I will provide an overview of the framework and its three research lines and illustrate some concrete research tasks.`
          },
          bio: `Ido Dagan holds B.Sc. (Summa Cum Laude) and Ph.D. degrees in Computer Science from the Technion, Israel. He conducted his Ph.D. research in collaboration with the IBM Haifa Scientific Center, where he was a research fellow in 1991. During 1992-1994 he was a Member of Technical Staff at AT&T Bell Laboratories. During 1994-1998 he has been at the Department of Computer Science of Bar Ilan University, to which he returned in 2003. During 1998-2003 he was co-founder and CTO of a text categorization startup company, FocusEngine, and VP of Technology at LingoMotors, a Cambridge Massachusetts company which acquired FocusEngine.`
        },
        {
          name: 'Noah Smith',
          org: 'University of Washington',
          photoUrl: '/static/img/speakers/noah-smith-min.png',
          link: 'https://homes.cs.washington.edu/~nasmith/',
          country: 'USA',
          talk: {
            title: `Syncretizing Structured and Learned Representations`,
            abstract: `My group's research targets automated understanding of natural language text, in both general-purpose and application-driven settings.  In this talk, I will describe new ways to use representation learning for NLP.  Noting that a data-driven model always assumes a theory (not necessarily a good one), I will argue for language-appropriate inductive bias in representation-learning-infused models of language.  I'll focus on how representation learning and structure combine to achieve new states of the art on broad-coverage semantic analysis tasks.`
          },
          bio: `Noah Smith is a Professor (effective September, 2018) in the Paul G. Allen School of Computer Science & Engineering at the University of Washington, as well as a Senior Research Manager at the Allen Institute for Artificial Intelligence. Previously, he was an Associate Professor of Language Technologies and Machine Learning in the School of Computer Science at Carnegie Mellon University. He received his Ph.D. in Computer Science from Johns Hopkins University in 2006 and his B.S. in Computer Science and B.A. in Linguistics from the University of Maryland in 2001. His research interests include statistical natural language processing, machine learning, and applications of natural language processing, especially to the social sciences. His book, Linguistic Structure Prediction, covers many of these topics. He has served on the editorial boards of the journals Computational Linguistics (2009–2011), Journal of Artificial Intelligence Research (2011–present), and Transactions of the Association for Computational Linguistics (2012–present), as the secretary-treasurer of SIGDAT (2012–2015 and 2018–present), and as program co-chair of ACL 2016. Alumni of his research group, Noah's ARK, are international leaders in NLP in academia and industry; in 2017 UW's Sounding Board team won the inaugural Amazon Alexa Prize. Smith's work has been recognized with a UW Innovation award (2016–2018), a Finmeccanica career development chair at CMU (2011–2014), an NSF CAREER award (2011–2016), a Hertz Foundation graduate fellowship (2001–2006), numerous best paper nominations and awards, and coverage by NPR, BBC, CBC, New York Times, Washington Post, and Time.`
        },
        {
          name: `Jun'ichi Tsujii`,
          org: 'National Institute of AIST',
          photoUrl: '/static/img/speakers/junichi-min.png',
          link: 'https://en.wikipedia.org/wiki/Jun%27ichi_Tsujii',
          country: 'Japan',
          talk: {
            title: `Artificial Intelligence Embedded in the Real World`,
            abstract: `Artificial intelligence technologies are being actively deployed in a
                      broad spectrum of fields, including logistics and financial services,
                      medical care and nursing, manufacturing, education, and scientific
                      research, to name only a few.  These technologies also play a critical
                      role in efficient and effective operation of social systems such as
                      controlling flows of people, things, and energy. The Artificial Intelligence Research Center (AIRC) strives to serve as
                      one of core research bases in Japan, with a focus on the artificial
                      intelligence technologies that have become fundamental technologies in
                      today’s society.  Through a systematic approach, we conduct integrated
                      research and development that embraces the entire spectrum from basic
                      research to application, and emphasize the importance of deploying AI
                      technologies in society.`
          },
          bio: `Professor Junichi Tsujii was a principal researcher at Microsoft
                Research Asia (MSRA) (05.2011-04.2015), Professor of Natural Language
                Processing in the Department of Computer Science, University of Tokyo
                (07.1995-04.2011) and Professor of Text Mining in School of Computer
                Science, University of Manchester (06.2005-04.2011), before taking up
                the directorship of the Artificial Intelligence Research Centre (AIRC)
                at National Institute of Advanced Industrial Science and Technology
                (AIST) (05.2015). During his tenure at these research institutions and
                at the AIRC, he has worked in the areas of Natural Language
                Processing, Question Answering, Text Mining and Machine Translation.
                He has been invited as a keynote speaker at top conferences,
                international symposiums and workshops, including BioNLP (Baltimore,
                2014), Meta-Net (Berlin, 2013), NTICIR (Tokyo, 2011), LREC (Lisbon,
                2004), ACL (Hong Kong, 2000), ACL (San Francisco, 1991) and Coling
                (Bonn, 1986).

                He was awarded an ACL fellowship (2014) and an IPSJ fellowship (2010).
                He also received a number of awards such as the IBM Science Award
                (1989), SEYMF Visiting Professorship (2000), Daiwa-Adrian Prize
                (2004), IBM Faculty Award (2005), Funai Achievement Award (2014),
                Okawa Award (2015), etc. He was awarded the Medal of Honour with
                Purple Ribbon (2010), one of the highest honours to academics in
                Japan.

                He was the president of ACL (2006), IAMT (2002-2004) and the AFNLP
                (2007-2008) and have been chair of ICCL (from 2014). He has
                contributed to the international academic community by being the
                general chair of many conferences including ACL(2003), EMNLP(2012)
                etc. and a program co-chair including Coling (1996), MT Summit (1999),
                Coling(2014), etc. He is a program co-chair of EMNLP (2018).`
        },
        {
          name: 'Vincent Ng',
          org: 'University of Texas',
          photoUrl: '/static/img/speakers/vincent-min.png',
          link: 'http://www.hlt.utdallas.edu/~vince/',
          country: 'USA',
          talk: {
            title: `Towards Content-Based Essay Scoring`,
            abstract: `State-of-the-art automated essay scoring engines such as E-rater do not grade essay content, focusing instead on providing diagnostic trait feedback on categories such as grammar, usage, mechanics, style and organization. Content-based essay scoring is very challenging: it requires an understanding of essay content and is beyond the reach of today's automated essay scoring technologies. As a result, content-dependent dimensions of essay quality are largely ignored in existing automated essay scoring research. In this talk, we describe our recent and ongoing efforts on content-based essay scoring, sharing the lessons we learned from automatically scoring one of the arguably most important content-dependent dimensions of persuasive essay quality, argument persuasiveness.`
          },
          bio: `Vincent Ng is a Professor in the Computer Science Department at the University of Texas at Dallas. He is also the director of the Machine Learning and Language Processing Laboratory in the Human Language Technology Research Institute at UT Dallas. He obtained his B.S. from Carnegie Mellon University and his Ph.D. from Cornell University. His research is in the area of Natural Language Processing, focusing on the development of machine learning methods for addressing key tasks in information extraction and discourse processing.`
        },
        {
          name: 'Thang Luong',
          org: 'Google Brain',
          photoUrl: '/static/img/speakers/thang-luong-min.png',
          link: 'https://nlp.stanford.edu/~lmthang/',
          country: 'USA',
          talk: {
            title: ``,
            abstract: ``
          },
          bio: `Thang Luong is a research scientist at Google Brain. He's interested in using deep learning to solve language problems, specifically reading comprehension and dialogue systems at the moment. He obtained his PhD at Stanford University under the guidance of Prof. Christopher Manning. In the past, he worked extensively on neural machine translation (NMT) at both Google and Stanford.`
        },
        {
          name: 'Linlin Li',
          org: 'Alibaba DAMO Academy',
          photoUrl: '/static/img/speakers/linlin-min.png',
          link: 'https://perso.limsi.fr/linlin/',
          country: 'China',
          talk: {
            title: `The text processing engine that powers Alibaba’s business applications`,
            abstract: `AliNLP is a large-scale NLP technology platform for the entire Eco-system of Alibaba .  It covers major NLP areas of  lexical, syntactic, semantic, discourse analysis, and distributed representation of text. AliNLP v0.1 was released in Dec, 2016 and v4.0 was released in Aug, 2017. It is used in 250+ business scenarios (Jun, 2018) with more than 500Billion+ API calls per day in Alibaba.  The AliNLP platform supports both monolingual and cross-lingual applications, and it is widely used not only in e-commerce but also in other vertical domains such as retail, healthcare, security etc.`
          },
          bio: `LI, Linlin received her PhD degree from the computer science department of Saarland University, Germany. Her main research area is Natural Language Processing. She worked at Microsoft Oslo, LIMSI-CNRS Paris and Baidu Beijing before joining Alibaba as a staff researcher in 2016. She is currently working in the Machine Intelligence Technology lab of DAMO Academy, leading the NLP foundation team.`
        }
      ]
    }
  },
  created () {
    DataUtil.sortAlphabeByName(this.speakers)
  },
  mounted () {
  }
}
</script>

<style scoped>
.name {
  color: white !important;
}
.info_box {
  height: 54px;
  padding-left: 8px !important;
  padding-right: 8px !important;
  bottom: 0px !important;
}
</style>
