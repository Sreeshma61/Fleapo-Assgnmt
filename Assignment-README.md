# My Fleapo-Assignment app
This project was built using Expo Snack.

# How to Run
 
Open this project in [Snack](https://snack.expo.dev)
or Open (https://snack.expo.dev/@sreeshma/fleapo-project?platform=android)

            OR
  1. Clone the repository:

    git clone (https://github.com/Sreeshma61/Fleapo-Assgnmt)

  2. Navigate to the project directory:

    cd Fleapo-Assgnmnt

  3. Install dependencies:

    npm install
      # or
    yarn

  4. Start the development server:

    npx start

  5. Use a simulator or scan the QR code to run the app        

#React Native Profile & PeopleList App

A React Native mobile application showcasing user profile and people listing screens, developed with TypeScript and fully aligned to the provided Figma design.

#Features

 1.Profile Screen with multiple reusable sections
   * Line Graph
   * FlatList
   * typography
   * theme
   * icons
   * images

 2.People List Screen with tabs (Friends, Verified, Everyone)
   * madeup with reusable theme,flatlist, images and search icons
   * Search bar added from figma for search from people list

 3.Custom reusable Card, Avatar, and Button components

 4.Global Theme Provider for centralized colors, typography, and spacing
   * Colors: for heading,subheading,border ,background ,lines,charts,...
   * Global spacing
   * text size and style for heading,subheading ,..

 5.Icons managed centrally from a single icon.tsx file

 6.FlatList data rendered via reusable card.tsx component

 7.Responsive UI with pixel-perfect match to Figma design
   * added all the size and style from figma for get the same look and feel for the UI
   * all the images downloaded and added in the asset folder for Avatars

#Folder Structure

├── assets/
    └──images/            #All the images used in the app
│   └── icons/            # All icons used in the app
├── components/
│   ├── Avatar.tsx        # Centralized avatar component
│   ├── Button.tsx        # Centralized button component
│   ├── Card.tsx          # Reusable card for FlatList
│   └── Graph.tsx         # Reusable Graph for the component
├── Context/
│   └── ThemeContext.tsx  # Theme provider
├── Screens/
│   ├── MyProfile.tsx     # Profile screen
│   └── PeopleList.tsx    # People list screen
├── Styles/
│   └── theme.tsx         # Centralized theme (colors, spacing, typography)
├── Navigation/
│   └── AppNavigator.tsx  # Navigation configuration


#Tech Stack

  1.React Native

  2.TypeScript

  3.React Navigation(for screen navigation)

  4.Context API (for theming)

  5.styled components( for styling)


#ScreenShots:

   1.Pofile Page:
   Mobile View
   ![image](https://github.com/user-attachments/assets/19d0bc0f-4821-4e02-bfe8-58d990092ed5)
   ![image](https://github.com/user-attachments/assets/57005315-7576-4c93-a26c-51d007ae6b2e)
   ![image](https://github.com/user-attachments/assets/c19aa347-4e81-4766-bfa9-1e84579ba27f)
   Web View
   ![image](https://github.com/user-attachments/assets/1589901e-5397-4e5b-902a-6c2ab8f9e8ac)
   ![image](https://github.com/user-attachments/assets/04f92eb3-5c6d-4339-b2b4-7555515c0f9b)
   ![image](https://github.com/user-attachments/assets/138d9138-dc67-4ec0-8234-0d0b0a9f9908)
   2.PeopleList Page:
   Mobile View
   ![image](https://github.com/user-attachments/assets/672f7451-fe21-4b1f-86ab-03844cf023de)
   Web View
   ![image](https://github.com/user-attachments/assets/bd121d03-05f2-41f4-89c3-4a3126d6fcf7)




