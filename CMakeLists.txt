cmake_minimum_required(VERSION 3.20)
project(WORKSHOP C)

add_library(workshop_core STATIC native/workshop_core.c)
target_include_directories(workshop_core PUBLIC native)

add_executable(workshop_core_smoke native/workshop_core_smoke.c)
target_link_libraries(workshop_core_smoke PRIVATE workshop_core)

enable_testing()
add_test(NAME workshop_core_smoke COMMAND workshop_core_smoke)
