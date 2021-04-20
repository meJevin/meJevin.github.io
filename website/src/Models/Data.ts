import ProjectModel from './ProjectModel';

export const getProjects = async (): Promise<ProjectModel[]> => {
   let result: ProjectModel[] = [];

   result.push({
      categoryName: 'Delphi',
      projectName: 'Screen Cropper',
      description: 'A screenshot taking program I made for myself a while back with Delhpi for Windows.',
      projectLink: 'https://github.com/meJevin/Screen-Cropper',
      tags: ["Delphi", "Lazarus", "WinForms", "WinAPI", "Dektop"]
   });

   result.push({
      categoryName: 'Delphi',
      projectName: 'Key Logger',
      description: 'My attempt on creating a key logger. Every programmer has to make one of these, come on...',
      projectLink: 'https://github.com/meJevin/Simple-Key-Logger',
      tags: [
        "Delphi",
        "Lazarus",
        "WinForms",
        "WinAPI",
        "Dektop",
        "WinSocks",
        "Indy10",
        "Client-Server"
      ]
   });

   result.push({
      categoryName: 'Delphi',
      projectName: 'PV Input',
      description: 'Application that monitors user keyboard input. I made it for myself to record input history while in-game',
      projectLink: 'https://github.com/meJevin/PVInput',
      tags: ["Delphi", "Lazarus", "WinForms", "WinAPI", "Dektop"]
   });

   result.push({
      categoryName: 'C#',
      projectName: 'Lounge Radio',
      description: 'An application that streams radio station audio via HTTP. Works on iOS and Anroid via Xamarin.Forms',
      projectLink: 'https://github.com/meJevin/LRadio',
      tags: ["C#", "Mobile", "iOS", "Anroid", "Xamarin.Forms"]
   });

   result.push({
      categoryName: 'C#',
      projectName: 'Philter',
      description: 'App that help promote some business related to cannabis. It was made with Unity3D for iOS and Anroid and has a really complex and buitiful UI',
      projectLink: 'https://github.com/meJevin/Philter',
      tags: ["C#", "Unity3D", "REST", "iOS", "Android", "JSON", "Mobile"]
   });

   result.push({
      categoryName: 'C#',
      projectName: 'Screen Cropper',
      description: 'A C# port of my screenshor taking program originally written in Delphi',
      projectLink: 'https://github.com/meJevin/ScreenCropperCSharp',
      tags: ["C#", "WinForms", "WinAPI", "Windows"]
   });

   result.push({
      categoryName: 'Web',
      projectName: 'My website',
      description: 'Literally a website you are currently on. Powered by React, TypeScript, and SCSS',
      projectLink: 'https://github.com/meJevin/meJevin.github.io',
      tags: ["Web", "HTML5", "CSS3", "SCSS", "TypeScript", "React"]
   });

   result.push({
      categoryName: 'Dart',
      projectName: 'PV Weather',
      description: 'A simple and clean cross-platform Weather app built using Flutter, OpenWeatherAPI and Firebase',
      projectLink: 'https://github.com/meJevin/PVWeather',
      tags: ["Dart", "Flutter", "REST", "Firebase", "NoSQL", "Reactive", "iOS", "Android"]
   });

   return result;
};