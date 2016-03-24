export declare class PageObject_Welcome {
    getGreeting(): webdriver.promise.Promise<string>;
    setFirstname(value: any): webdriver.promise.Promise<void>;
    setLastname(value: any): webdriver.promise.Promise<void>;
    getFullname(): webdriver.promise.Promise<string>;
    pressSubmitButton(): webdriver.promise.Promise<void>;
    openAlertDialog(): webdriver.promise.Promise<webdriver.promise.Promise<boolean>>;
}
