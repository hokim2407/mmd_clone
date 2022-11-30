import React, {useRef} from 'react';

import {
  Dimensions,
  Animated,
  GestureResponderEvent as GestEvent,
  PanResponderGestureState as PanState,
  PanResponder,
} from 'react-native';

const {height} = Dimensions.get('window');

enum DrawerState {
  Open = height - 150,
  Peek = Math.floor((height - 150) / 2),
  Closed = 0,
}

class BottomDrawerResponder {
  protected cur: number = 0;
  protected movable: boolean = true;
  constructor(
    protected setState?: React.Dispatch<React.SetStateAction<number>>,
    protected state = DrawerState.Closed,
    protected margin = 65,
  ) {}
  // 이동 애니메이션
  animateMove = (y: Animated.Value, toValue: number, isSpring: boolean) => {
    const options = {
      toValue: -toValue,
      useNativeDriver: true,
    };

    if (isSpring) {
      Animated.spring(y, {
        tension: 20,
        ...options,
      }).start(_ => {
        if (this.setState) {
          this.setState(toValue);
        }
      });
    } else {
      Animated.timing(y, {
        duration: 0,
        ...options,
      }).start();
    }
  };

  // 3단 이동
  getNextState = (val: number): DrawerState => {
    if (val > (DrawerState.Open + DrawerState.Peek) / 2) {
      return DrawerState.Open;
    }
    if (val > DrawerState.Peek / 2) {
      return DrawerState.Peek;
    }
    return DrawerState.Closed;
  };

  // moveY로부터 Y위치 가져오기
  getYPosition = (moveY: number) =>
    height - moveY - this.margin > DrawerState.Open
      ? DrawerState.Open
      : height - moveY - this.margin;

  // BottomDrawer 구현
  createBottomDrawerResponder = (y: Animated.Value) => {
    const onPanResponderMove = (_: GestEvent, {moveY}: PanState) => {
      if (this.movable == false) return;
      const val = this.getYPosition(moveY);
      this.animateMove(y, val, false);
    };

    const onPanResponderGrant = (_: GestEvent, {moveY}: PanState) => {
      if (Math.abs(height - moveY - this.margin - this.cur) > 100) {
        this.movable = false;
      } else {
        this.movable = true;
      }
    };
    const onPanResponderRelease = (_: GestEvent, {moveY}: PanState) => {
      if (this.movable == false) return;
      const valueToMove = this.getYPosition(moveY);
      const nextState = this.getNextState(valueToMove);
      this.cur = nextState;
      this.animateMove(y, nextState, true);
    };

    const onMoveShouldSetPanResponder = (_: GestEvent, {dy}: PanState) =>
      Math.abs(dy) >= 10;

    const panResponder = useRef(
      PanResponder.create({
        onPanResponderGrant,
        onMoveShouldSetPanResponder,
        onStartShouldSetPanResponderCapture: onMoveShouldSetPanResponder,
        onPanResponderMove,
        onPanResponderRelease,
      }),
    ).current;

    return panResponder;
  };
}
export {BottomDrawerResponder, DrawerState};
