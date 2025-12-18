import { useSocialAuth } from "@/hooks/useSocialAuth";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
 
export default function Index() {

  const { isLoading, handleSocialAuth } = useSocialAuth();

  return (

    <View className="flex-1 bg-white">
     <View className="flex-1 px-8 justify-between">
        <View className="flex-1 justify-center">

          {/* BG IMG */}
          <View className="items-center">
            <Image  
              source={ require("../../assets/images/auth2.png") } 
              className="size-96" 
              resizeMode="contain"
            />
          </View>

          <View className="flex-col gap-2">

            {/* GOOGLE BUTTON */}
              <TouchableOpacity 
                className="flex-row items-center justify-center bg-white border border-grey-300 rounded-full py-4 px-3"
                onPress={ () => handleSocialAuth("oauth_google") }
                disabled={!!isLoading}
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  elevation: 2, // only applied in android
                }}
              >

                {isLoading === "oauth_google" ? (
                  <ActivityIndicator size="small" color="#4285F4" className="size-8"/>
                ) : (
                  <View className="flex-row items-center justify-center">
                    <View className="w-8 h-8 mr-5 ml-2 items-center justify-center">
                      <Image
                        source={require("../../assets/images/google.png")}
                        className="w-10 h-10"
                        resizeMode="contain"
                      />
                    </View>
                    <Text className="text-black font-medium text-xl">
                      Continue with Google
                    </Text>
                  </View>
                )}
              </TouchableOpacity>

            {/* APPLE BUTTON */}
              <TouchableOpacity 
                className="flex-row items-center justify-center bg-white border border-grey-300 rounded-full py-4 px-3"
                onPress={ () => handleSocialAuth("oauth_apple") }
                disabled={!!isLoading}
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  elevation: 2, // only applied in android
                }}
              >

                {isLoading === "oauth_apple" ? (
                  <ActivityIndicator size="small" color="#000" className="size-8"/>
                ) : (
                  <View className="flex-row items-center justify-center">
                    <View className="w-8 h-8 mr-5 items-center justify-center">
                      <Image
                        source={require("../../assets/images/apple.png")}
                        className="w-7 h-7"
                        resizeMode="contain"
                      />
                    </View>
                    <Text className="text-black font-medium text-xl">
                        Continue with Apple
                    </Text> 
                  </View>
                )}
              </TouchableOpacity>

          </View>

              {/* T&C */}
              <Text className="text-center text-gray-500 text-s leading-4 mt-6 px-10">
                By signing up, you agree to our <Text className="text-blue-500">Terms</Text>
                {", "}
                <Text className="text-blue-500">Privacy Policy</Text>
                {" and "}
                <Text className="text-blue-500">Cookie Use</Text>
              </Text>

        </View>
      </View>
    </View>
  
  );
}


