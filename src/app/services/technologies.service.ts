import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  cards = {
    'Web-разработка': [
      { title: 'HTML', imageUrl: 'assets/imagies/html.png' },
      { title: 'CSS', imageUrl: 'assets/imagies/css.png' },
      { title: 'SASS', imageUrl: 'assets/imagies/sass.png' },
      { title: 'Bootstrap', imageUrl: 'assets/imagies/bootstrap.png' },
      { title: 'JS', imageUrl: 'assets/imagies/js.png' },
      { title: 'TS', imageUrl: 'assets/imagies/ts.png' },
      { title: 'React', imageUrl: 'assets/imagies/react.png' },
      { title: 'Redux', imageUrl: 'assets/imagies/redux.png' },
      { title: 'Angular', imageUrl: 'assets/imagies/angular.png' },
      { title: 'npm', imageUrl: 'assets/imagies/npm.png' },
      { title: 'API', imageUrl: 'assets/imagies/api.png' },
      { title: 'Jquery', imageUrl: 'assets/imagies/jquery.png' },
      { title: 'Git', imageUrl: 'assets/imagies/git.png' },
      { title: 'GitHub', imageUrl: 'assets/imagies/github.png' },


    ],
    'Backend- разработка': [
      { title: 'Java', imageUrl: 'assets/imagies/java.png' },
      { title: 'Kotlin', imageUrl: 'assets/imagies/kotlin.png' },
      { title: 'Hibernate', imageUrl: 'assets/imagies/hibernate.png' },
      { title: 'Spring', imageUrl: 'assets/imagies/spring.png' },
      { title: 'Apache Tomcat', imageUrl: 'assets/imagies/apacheTomcat.png' },

    ],
    'Android - разработка': [
      { title: 'Java', imageUrl: 'assets/imagies/java.png' },
      { title: 'Kotlin', imageUrl: 'assets/imagies/kotlin.png' },
      { title: 'Jetpack Compose', imageUrl: 'assets/imagies/jetpackCompose.png' },
      { title: 'MySQL', imageUrl: 'assets/imagies/mysql.png' },
      { title: 'JUnit', imageUrl: 'assets/imagies/junit.png' },
    ],
    'IOS- разработка': [
      { title: 'Xcode', imageUrl: 'assets/imagies/xcode.png' },
      { title: 'Swift', imageUrl: 'assets/imagies/swift.png' },
      { title: 'UIKit', imageUrl: 'assets/imagies/uikit.png' },
      { title: 'SwiftUI', imageUrl: 'assets/imagies/swiftui.png' },
    ],
    'UI/UX-Design': [
      { title: 'Figma', imageUrl: 'assets/imagies/figma.png' },
      { title: 'Illustrator', imageUrl: 'assets/imagies/illustrator2.png' },
      { title: 'Photoshop', imageUrl: 'assets/imagies/photoshop2.png' },
    ]
  };

  getCategories() {
    return Object.keys(this.cards);
  }

  getCards() {
    return this.cards;
  }
}
