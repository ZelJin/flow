/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/**
 * A UI node that can be rendered by React. React can render most primitives in
 * addition to elements and arrays of nodes.
 */

declare type React$Node =
  | void
  | null
  | boolean
  | number
  | string
  | React$Element<any>
  | React$Portal
  | Iterable<?React$Node>;


/**
 * Base class of ES6 React classes, modeled as a polymorphic class whose main
 * type parameters are Props and State.
 */
declare class React$Component<Props, State = void> {
  // fields

  props: Props;
  state: State;

  // action methods

  setState(
    partialState: ?$ReadOnly<Partial<State>> | ((State, Props) => ?$ReadOnly<Partial<State>>),
    callback?: () => mixed,
  ): void;

  forceUpdate(callback?: () => void): void;

  // lifecycle methods

  constructor(props?: Props, context?: any): void;
  render(): React$Node;
  componentWillMount(): mixed;
  UNSAFE_componentWillMount(): mixed;
  componentDidMount(): mixed;
  componentWillReceiveProps(
    nextProps: Props,
    nextContext: any,
  ): mixed;
  UNSAFE_componentWillReceiveProps(
    nextProps: Props,
    nextContext: any,
  ): mixed;
  shouldComponentUpdate(
    nextProps: Props,
    nextState: State,
    nextContext: any,
  ): boolean;
  componentWillUpdate(
    nextProps: Props,
    nextState: State,
    nextContext: any,
  ): mixed;
  UNSAFE_componentWillUpdate(
    nextProps: Props,
    nextState: State,
    nextContext: any,
  ): mixed;
  componentDidUpdate(
    prevProps: Props,
    prevState: State,
    prevContext: any,
  ): mixed;
  componentWillUnmount(): mixed;
  componentDidCatch(
    error: Error,
    info: { componentStack: string, ... }
  ): mixed;

  // long tail of other stuff not modeled very well

  refs: any;
  context: any;
  getChildContext(): any;
  static displayName?: ?string;
  static childContextTypes: any;
  static contextTypes: any;
  static propTypes: any;

  // We don't add a type for `defaultProps` so that its type may be entirely
  // inferred when we diff the type for `defaultProps` with `Props`. Otherwise
  // the user would need to define a type (which would be redundant) to override
  // the type we provide here in the base class.
  //
  // static defaultProps: $Shape<Props>;
}

declare class React$PureComponent<Props, State = void>
  extends React$Component<Props, State> {
}

declare type React$AbstractComponentStatics = {
  displayName?: ?string,
  // This is only on function components, but trying to access name when
  // displayName is undefined is a common pattern.
  name?: ?string,
  propTypes?: {[string] : any, ...},
  ...
};

/**
 * The type of a component in React. A React component may be a:
 *
 * - Stateless functional components. Functions that take in props as an
 *   argument and return a React node.
 * - ES6 class component. Components with state defined using the ES6 class syntax
 */
declare type React$ComponentType<-Config> = React$AbstractComponent<Config, mixed, React$Node>;

/**
 * The type of an element in React. A React element may be a:
 *
 * - String. These elements are intrinsics that depend on the React renderer
 *   implementation.
 * - React component. See `ComponentType` for more information about its
 *   different variants.
 */
declare type React$ElementType =
  | string
  | React$AbstractComponent<empty, mixed, React$Node>;

/**
 * Type of a React element. React elements are commonly created using JSX
 * literals, which desugar to React.createElement calls (see below).
 *
 * The internal structure of React.Element is intentionally omitted to
 * discourage React.Element inspection.
 *
 * See https://react.dev/reference/react/Children#alternatives for alternatives.
 */
declare opaque type React$Element<+ElementType: React$ElementType, +P = React$ElementProps<ElementType>>: {...};

declare type React$MixedElement = React$Element<React$ElementType>;

/**
 * The type of the key that React uses to determine where items in a new list
 * have moved.
 */
declare type React$Key = string | number;

declare opaque type React$RefObject<T>: {| current: T |}

/**
 * DEPRECATED: The type of the ref prop available on all React components,
 * including legacy number | string refs.
 */
declare type React$Ref<ElementType: React$ElementType> =
  | { -current: React$ElementRef<ElementType> | null, ... }
  | ((React$ElementRef<ElementType> | null) => mixed)
  | number | string;

/**
 * The type of the `ref` prop on forwardRef components and the ref argument
 * for useImperativeHandle.
 */
declare type React$RefSetter<-T> =
  | { -current: T | null, ... }
  | ((T | null) => mixed);


/**
 * The type of a React Context.  React Contexts are created by calling
 * createContext() with a default value.
 */
declare type React$Context<T> = {
  Provider: React$ComponentType<{
    +value: T,
    +children?: React$Node,
    ...
  }>,
  Consumer: React$ComponentType<{ +children: (value: T) => ?React$Node, ... }>,
  // Optional, user-specified value for custom display label in React DevTools.
  displayName?: string,
  ...
}

/**
 * A React portal node. The implementation of the portal node is hidden to React
 * users so we use an opaque type.
 */
declare opaque type React$Portal;

declare type React$FragmentType = $Exports<'react'>['Fragment'];

/* Utility type to extract the render type of a component */
type React$ComponentRenders<T: React$AbstractComponent<empty>> =
  T extends React$AbstractComponent<empty, mixed, infer R> ? R : empty;

declare module react {
  declare export var DOM: any;
  declare export var version: string;

  /** @deprecated */
  declare export function checkPropTypes<V>(
    propTypes : any,
    values: V,
    location: string,
    componentName: string,
    getStack: ?(() => ?string)
  ) : void;

  /** @deprecated */
  declare export var createClass: React$CreateClass;
  /**
   * `createContext` lets you create a context that components can provide or read.
   *
   * @see https://react.dev/reference/react/createContext
   */
  declare export function createContext<T>(
    defaultValue: T,
    calculateChangedBits: ?(a: T, b: T) => number,
  ): React$Context<T>;
  /**
   * `createElement` lets you create a React element.
   * It serves as an alternative to writing JSX.
   *
   * @see https://react.dev/reference/react/createElement
   */
  declare export var createElement: React$CreateElement;
  /**
   * Using cloneElement is uncommon and can lead to fragile code.
   * [See common alternatives](https://react.dev/reference/react/cloneElement#alternatives)
   *
   * @see https://react.dev/reference/react/cloneElement
   */
  declare export var cloneElement: React$CloneElement;
  /**
   * This API will be removed in a future major version of React.
   * [See the alternatives](https://react.dev/reference/react/createFactory#alternatives).
   *
   * @deprecated
   */
  declare export function createFactory<ElementType: React$ElementType>(
    type: ElementType,
  ): React$ElementFactory<ElementType>;
  /**
   * `createRef` creates a ref object which can contain arbitrary value.
   *
   * `createRef` is mostly used for class components.
   * Function components typically rely on `useRef` instead.
   *
   * @see https://react.dev/reference/react/createRef
   */
  declare export function createRef<T>(
  ): {|current: null | T|};
  /**
   * `isValidElement` checks whether a value is a React element.
   *
   * It is very uncommon to need isValidElement.
   * It’s mostly useful if you’re calling another API that only accepts
   * elements (like cloneElement does) and you want to avoid an error
   * when your argument is not a React element.
   *
   * Unless you have some very specific reason to add an isValidElement check,
   * you probably don’t need it.
   *
   * @see https://react.dev/reference/react/isValidElement
   */
  declare export function isValidElement(element: any): boolean;

  /**
   * `Component` lets you define a React component as a JavaScript class.
   *
   * We recommend defining components as functions instead of classes.
   * [See how to migrate](https://react.dev/reference/react/PureComponent#alternatives).
   *
   * @see https://react.dev/reference/react/Component
   */
  declare export var Component: typeof React$Component;

  /**
   * `PureComponent` is similar to `Component`, but it skip re-renders with same props.
   *
   * We recommend defining components as functions instead of classes.
   * [See how to migrate](https://react.dev/reference/react/PureComponent#alternatives).
   *
   * @see https://react.dev/reference/react/PureComponent
   */
  declare export var PureComponent: typeof React$PureComponent;
  declare export type ComponentType<-P> = React$ComponentType<P>;
  declare export type AbstractComponent<
    -Config,
    +Instance = mixed,
    +Renders: React$Node = React$Node,
  > = React$AbstractComponent<Config, Instance, Renders>;
  declare export type PropsOf<E: string | React$MixedElement> = E extends React$Element<infer C> ? React$ElementConfig<C> : (E extends string ? $JSXIntrinsics[E]['props'] : empty);
  declare export type PropOf<E: string | React$MixedElement, K: string> = PropsOf<E>[K]
  declare export type RefOf<E: string | React$MixedElement> = E extends React$Element<infer C> ? React$ElementRef<C> : (E extends string ? $JSXIntrinsics[E]['instance'] : empty);
  declare export type MixedElement = React$MixedElement;
  declare export type ElementType = React$ElementType;

  /**
   * Type of a React element. React elements are commonly created using JSX
   * literals, which desugar to React.createElement calls (see below).
   */
  declare export type Element<+C, +P = React$ElementProps<C>> = React$Element<C, P>;
  /**
   * `<Fragment>`, often used via `<>...</>` syntax,
   * lets you group elements without a wrapper node.
   *
   * @see https://react.dev/reference/react/Fragment
   */
  declare export component Fragment<Renders: React$Node = React$Node>(
    children?: Renders,
  ) renders Renders;

  declare export type Key = React$Key;
  declare export type Ref<C> = React$Ref<C>;
  declare export type RefSetter<-T> = React$RefSetter<T>;
  declare export type Node = React$Node;
  declare export type Context<T> = React$Context<T>;
  declare export type Portal = React$Portal;
  declare export var ConcurrentMode: ({ +children?: React$Node, ... }) => React$Node; // 16.7+
  /**
   * `<StrictMode>` lets you find common bugs in your components early
   * during development.
   *
   * @see https://react.dev/reference/react/StrictMode
   */
  declare export var StrictMode: ({ +children?: React$Node, ... }) => React$Node;

  /**
   * `<Suspense>` lets you display a fallback until its children have finished
   * loading.
   *
   * @see https://react.dev/reference/react/Suspense
   */
  declare export var Suspense: React$ComponentType<{
    +children?: React$Node,
    +fallback?: React$Node,
    ...
  }>; // 16.6+

  declare export type ElementProps<C> = React$ElementProps<C>;
  declare export type ElementConfig<C> = React$ElementConfig<C>;
  declare export type ElementRef<C> = React$ElementRef<C>;
  declare export type Config<Props, DefaultProps> = React$Config<Props, DefaultProps>;

  declare interface Thenable<T> {
    then(
      onFulfill: (value: T) => any,
      onReject: (error: mixed) => mixed,
    ): mixed;
  }

  declare type Usable<T> = Thenable<T> | React$Context<T>;

  declare export type ChildrenArray<+T> = $ReadOnlyArray<ChildrenArray<T>> | T;
  /**
   * `Children`lets you manipulate and transform the JSX received as the
   * children prop.
   *
   * Using `Children` is uncommon and can lead to fragile code.
   * [See common alternatives](https://react.dev/reference/react/Children#alternatives).
   *
   * @see https://react.dev/reference/react/Children
   */
  declare export var Children: {
    map<T, U, This>(
      children: ChildrenArray<T>,
      fn: (this : This, child: $NonMaybeType<T>, index: number) => U,
      thisArg: This,
    ): Array<$NonMaybeType<U>>,
    forEach<T, This>(
      children: ChildrenArray<T>,
      fn: (this : This, child: T, index: number) => mixed,
      thisArg: This,
    ): void,
    count(children: ChildrenArray<any>): number,
    only<T>(children: ChildrenArray<T>): $NonMaybeType<T>,
    toArray<T>(children: ChildrenArray<T>): Array<$NonMaybeType<T>>,
    ...
  };

  /**
   * `forwardRef` lets your component expose a DOM node to parent component
   * with a ref.
   *
   * @see https://react.dev/reference/react/forwardRef
   */
  declare export function forwardRef<Config, Instance, Renders: React$Node = React$Node>(
    render: (
      props: Config,
      ref: React$RefSetter<Instance>,
    ) => Renders,
  ): React$AbstractComponent<Config, Instance, Renders>;

  /**
   * `memo` lets you skip re-rendering a component when its props are unchanged.
   *
   * @see https://react.dev/reference/react/memo
   */
  declare export function memo<Config, Instance = mixed, Renders: React$Node = React$Node>(
    component: React$AbstractComponent<Config, Instance, Renders>,
    equal?: (Config, Config) => boolean,
  ): React$AbstractComponent<Config, Instance, Renders>;

  /**
   * `lazy` lets you defer loading component’s code until it is rendered for
   * the first time.
   *
   * @see https://react.dev/reference/react/lazy
   */
  declare export function lazy<Config, Instance = mixed, Renders: React$Node = React$Node>(
    component: () => Promise<{ default: React$AbstractComponent<Config, Instance, Renders>, ... }>,
  ): React$AbstractComponent<Config, Instance, Renders>;

  declare type MaybeCleanUpFn = void | (() => void);
  declare export type ReactSetStateFunction<S> = ((S => S) | S) => void;

  /**
   * `use` is a React Hook that lets you read the value of a resource like a
   * `Promise` or `context`.
   *
   * @see https://react.dev/reference/react/use
   */
  declare export function use<T>(usable: Usable<T>): T;

  /**
   * `useContext` is a React Hook that lets you read and subscribe to context
   * from your component.
   *
   * @see https://react.dev/reference/react/useContext
   */
  declare export function useContext<T>(context: React$Context<T>): T;

  /**
   * `useState` is a React Hook that lets you add a
   * [state variable](https://react.dev/learn/state-a-components-memory)
   * to your component.
   *
   * @see https://react.dev/reference/react/useState
   */
  declare export function useState<S>(
    initialState: (() => S) | S,
  ): [S, ReactSetStateFunction<S>];

  declare type Dispatch<A> = (A) => void;

  /**
   * `useReducer` is a React Hook that lets you add a
   * [reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)
   * to your component.
   *
   * @see https://react.dev/reference/react/useReducer
   */
  declare export function useReducer<S, A>(
    reducer: (S, A) => S,
    initialState: S,
  ): [S, Dispatch<A>];

  declare export function useReducer<S, A>(
    reducer: (S, A) => S,
    initialState: S,
    init: void,
  ): [S, Dispatch<A>];

  declare export function useReducer<S, A, I>(
    reducer: (S, A) => S,
    initialArg: I,
    init: (I) => S,
  ): [S, Dispatch<A>];

  declare export type RefObject<T> = React$RefObject<T>;
  /**
   * `useRef` is a React Hook that lets you reference a value that's
   * not needed for rendering.
   *
   * @see https://react.dev/reference/react/useRef
   */
  declare export function useRef<T>(initialValue: T): RefObject<T>;

  /**
   * `useDebugValue` is a React Hook that lets you add a label to a custom Hook
   * in React DevTools.
   *
   * @see https://react.dev/reference/react/useDebugValue
   */
  declare export function useDebugValue(value: any): void;

  /**
   * `useEffect` is a React Hook that lets you
   * [synchronize a component with an external system](https://react.dev/learn/synchronizing-with-effects).
   *
   * @see https://react.dev/reference/react/useEffect
   */
  declare export function useEffect(
    create: () => MaybeCleanUpFn,
    inputs?: ?$ReadOnlyArray<mixed>,
  ): void;

  /**
   * `useLayoutEffect` is a version of useEffect that fires before the browser
   * repaints the screen.
   *
   * `useLayoutEffect` can hurt performance. Prefer `useEffect` when possible.
   *
   * @see https://react.dev/reference/react/useLayoutEffect
   */
  declare export function useLayoutEffect(
    create: () => MaybeCleanUpFn,
    inputs?: ?$ReadOnlyArray<mixed>,
  ): void;

  /**
   * `useCallback` is a React Hook that lets you cache a function definition
   * between re-renders.
   *
   * @see https://react.dev/reference/react/useCallback
   */
  declare export function useCallback<T: (...args: $ReadOnlyArray<empty>) => mixed>(
    callback: T,
    inputs: ?$ReadOnlyArray<mixed>,
  ): T;

  /**
   * useMemo is a React Hook that lets you cache the result of a calculation
   * between re-renders.
   *
   * @see https://react.dev/reference/react/useMemo
   */
  declare export function useMemo<T>(
    create: () => T,
    inputs: ?$ReadOnlyArray<mixed>,
  ): T;

  /**
   * `useImperativeHandle` is a React Hook that lets you customize the handle
   * exposed as a ref.
   *
   * @see https://react.dev/reference/react/useImperativeHandle
   */
  declare export function useImperativeHandle<T>(
    ref: React$RefSetter<T> | null | void,
    create: () => T,
    inputs: ?$ReadOnlyArray<mixed>,
  ): void;

  /**
   * `useDeferredValue` is a React Hook that lets you defer updating
   * a part of the UI.
   *
   * @see https://react.dev/reference/react/useDeferredValue
   */
  declare export function useDeferredValue<T>(value: T): T;

  /**
   * `useTransition` is a React Hook that lets you update the state
   * without blocking the UI.
   *
   * @see https://react.dev/reference/react/useTransition
   */
  declare export function useTransition(): [boolean, (() => void) => void];

  /**
   * `startTransition` lets you update the state without blocking the UI.
   *
   * @see https://react.dev/reference/react/startTransition
   */
  declare export function startTransition(() => void): void;

  /**
   * `useId` is a React Hook for generating unique IDs that
   * can be passed to accessibility attributes.
   *
   * @see https://react.dev/reference/react/useId
   */
  declare export function useId(): string;

  /**
   * `useInsertionEffect` allows inserting elements into the DOM
   * before any layout effects fire.
   *
   * `useInsertionEffect` is for CSS-in-JS library authors. Unless you are
   * working on a CSS-in-JS library and need a place to inject the styles,
   * you probably want `useEffect` or `useLayoutEffect` instead.
   *
   * @see https://react.dev/reference/react/useInsertionEffect
   */
  declare export function useInsertionEffect(
    create: () => MaybeCleanUpFn,
    inputs?: ?$ReadOnlyArray<mixed>,
  ): void;

  /**
   * `useSyncExternalStore` is a React Hook that lets you subscribe
   * to an external store.
   *
   * @see https://react.dev/reference/react/useSyncExternalStore
   */
  declare export function useSyncExternalStore<Snapshot>(
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => Snapshot,
    getServerSnapshot?: () => Snapshot,
  ): Snapshot;

  declare export type Interaction = {
    name: string,
    timestamp: number,
    ...
  };

  declare type ProfilerOnRenderFnType = (
    id: string,
    phase: "mount" | "update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    interactions: Set<Interaction>,
  ) => void;

  /**
   * `<Profiler>` lets you measure rendering performance of a
   * React tree programmatically.
   *
   * @see https://react.dev/reference/react/Profiler
   */
  declare export var Profiler: React$AbstractComponent<{|
    +children?: React$Node,
    +id: string,
    +onRender: ProfilerOnRenderFnType,
  |}, void, React$Node>;

  declare type TimeoutConfig = {|
    timeoutMs: number,
  |};

  declare const React: {
    +DOM: typeof DOM,
    +version: typeof version,
    +checkPropTypes: typeof checkPropTypes,
    +memo: typeof memo,
    +lazy: typeof lazy,
    +createClass: typeof createClass,
    +createContext: typeof createContext,
    +createElement: typeof createElement,
    +cloneElement: typeof cloneElement,
    +createFactory: typeof createFactory,
    +createRef: typeof createRef,
    +forwardRef: typeof forwardRef,
    +isValidElement: typeof isValidElement,
    +Component: typeof Component,
    +PureComponent: typeof PureComponent,
    +Fragment: typeof Fragment,
    +Children: typeof Children,
    +ConcurrentMode: typeof ConcurrentMode,
    +StrictMode: typeof StrictMode,
    +Profiler: typeof Profiler,
    +Suspense: typeof Suspense,
    +useContext: typeof useContext,
    +useState: typeof useState,
    +useReducer: typeof useReducer,
    +useRef: typeof useRef,
    +useEffect: typeof useEffect,
    +useLayoutEffect: typeof useLayoutEffect,
    +useCallback: typeof useCallback,
    +useMemo: typeof useMemo,
    +useImperativeHandle: typeof useImperativeHandle,
    +useTransition: typeof useTransition,
    +useDeferredValue: typeof useDeferredValue,
    +startTransition: typeof startTransition,
    +useId: typeof useId,
    +useInsertionEffect: typeof useInsertionEffect,
    +useSyncExternalStore: typeof useSyncExternalStore,
    ...
  };
  declare export default typeof React;
}
